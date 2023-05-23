import { create } from 'zustand-vue';
import { validateConfig } from '@/config';
import { API } from '@/services';

type State = ReturnType<typeof getStoreState>

const getStoreState = (set : any, get : any) => {
	const initialState = {
		userName: '' as string,
		userPassword: '' as string,

		loginErrors: undefined as (undefined | Record<string, any>),

		loginLoading: false as boolean,
		loginResponse: {} as Record<string, any>,
		isLoginSuccess: undefined as undefined | 0 | 1,

		setLoginErrors: (fieldName : string, error ?: string) => {
			let { loginErrors } = get();
			if (!loginErrors) {
				loginErrors = {};
			};
			if (error) {
				loginErrors[fieldName] = error;
			}
			if (!error) {
				delete loginErrors[fieldName];
			};
			const isEmptyKey = Object.keys(loginErrors).length === 0;
			if (isEmptyKey) {
				loginErrors = undefined;
			};
			set({ loginErrors });
			return loginErrors;
		},

		validateUserName: () => {
			const { userName, setLoginErrors } = get();
			let userNameError : any;
			const required = userName !== '' && userName !== undefined && userName !== null;
			if (!required) {
				userNameError = validateConfig['login-userName-input'].required;
			};
			setLoginErrors('userName', userNameError);
		},

		validateuserPassword: () => {
			const { userPassword, setLoginErrors } = get();
			let userPasswordError : any;
			const required = userPassword !== '' && userPassword !== undefined && userPassword !== null;
			if (!required) {
				userPasswordError = validateConfig['login-userPassword-input'].required;
			};
			setLoginErrors('userPassword', userPasswordError);
		},

		login_before_reset: () => {
			set({
				loginErrors: undefined,
				isLoginSuccess: undefined,
				loginLoading: false,
				loginResponse: {},
			});
		},

		login_before_validate: () => {
			const { validateUserName, validateuserPassword } = get();
			validateUserName();
			validateuserPassword();

			const { loginErrors, } = get();
			if (loginErrors) {
				console.error('login_validate_error', loginErrors);
			};
			return { loginErrors };
		},

		login_request_lanuch: async () => {
			const { userName, userPassword, } = get() as State;
			const apiFn = API.login.request;
			const apiParams = {
				userName,
				userPassword,
			};
			set({ loginLoading: true });
			const res = await apiFn({ data: apiParams, format: res => res });
			set({ loginLoading: false, loginResponse: res, });
			return res;
		},

		login_complete_getIsLoginSuccess: () => {
			const { loginResponse } = get();
			const isLoginSuccess = loginResponse && Number(loginResponse.code) === 200 ? 1 : 0;
			set({ isLoginSuccess });
			return isLoginSuccess;
		},

		login_complete: async () => {
			const { login_complete_getIsLoginSuccess } = get() as State;
			login_complete_getIsLoginSuccess();
		},

		login: async () => {
			const { loginLoading, login_before_reset, login_before_validate, login_request_lanuch, login_complete } = get() as State;
			if (loginLoading) return get() as State;
			login_before_reset();
			login_before_validate();
			const { loginErrors } = get() as State;
			if (loginErrors) return get() as State;
			await login_request_lanuch();
			login_complete();
			return get() as State;
		},
	};
	return {
		...initialState,
		clearStore: () => {
			set({}, true);
		}
	};
};

export const useLoginStore = create(getStoreState);