<template>
	<Page>
		<view class='loginPage'>
			<view class='loginTipText'>{{loginTipText}}</view>

			<view class='spacing-middle' />

			<UserNameInput />

			<view class='spacing-small' />

			<UserPasswordInput />

			<view class='spacing-small' />

			<LoginButton />
		</view>
	</Page>
</template>

<script setup lang="ts">
	import { uiConfig } from '@/config';

	import UserNameInput from '@/componentsBusiness/Inputs/UserNameInput.vue';
	import UserPasswordInput from '@/componentsBusiness/Inputs/UserPasswordInput.vue';
	import LoginButton from '@/componentsBusiness/Buttons/LoginButton.vue';
	import Page from '@/componentsBusiness/Page/index.vue';

	const loginTipText = uiConfig['login-tip'].text;
</script>

<style>
	.spacing-small {
		padding: 12px 0px;
	}

	.spacing-middle {
		padding: 24px 0px;
	}

	.spacing-larger {
		padding: 36px 0px;
	}

	.loginPage {
		padding: 20px;
	}

	.loginTipText {
		color: #10231d;
	}
</style>