<template>
	<button :style='style' :loading='loginLoading' @click='click'>{{children}}</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	import { useLoginStore } from '@/store';
	import { Messages, message } from '@/manager/message';

	import { uiConfig } from '@/config';
	import { objToStrStyle } from '@/utils';
	import { defaultButtonProps } from '@/types/buttonProps';

	const props = defineProps(defaultButtonProps as any);

	const children = uiConfig['login-confirm-button'].text;

	const style = computed(() => {
		return objToStrStyle({
			width: '100%',
			'letter-spacing': '4px',
			...uiConfig['login-confirm-button'].style,
		}) + `${props.style}`;
	});

	const loginLoading = useLoginStore(state => state.loginLoading);

	const click = async () => {
		const { loginErrors, isLoginSuccess } = await useLoginStore.getState().login();
		const firstErrorMsg = loginErrors && Object.values(loginErrors || {})[0];
		if (firstErrorMsg) {
			message(firstErrorMsg, 10000, { type: 'error' });
		};

		if (isLoginSuccess === 0) {
			Messages.loginFailed();
		};

		if (isLoginSuccess === 1) {
			Messages.loginSuccess();
		};
	};
</script>

<style>

</style>