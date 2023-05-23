import { create } from 'zustand-vue';
import { type MessageOptions } from './types';

export type State = ReturnType<typeof getStoreState>;

const getStoreState = (set : any, get : any) => {
	return {
		globalMessageRef: null as null | Record<string, any>,

		globalMessageOptions: {
			duration: 2000,
			text: '',
			type: 'success',
		} as MessageOptions,

		setGlobalMessageRef: (ref : any) => {
			set({ globalMessageRef: ref });
		},

		setGlobalMessageOptions: (options : MessageOptions) => {
			const { globalMessageOptions } = get() as State;
			Object.keys(options).forEach(key => {
				globalMessageOptions[key] = options[key]
			});
			set({ globalMessageOptions });
		},
	};
};

export const useMessageStore = create(getStoreState);