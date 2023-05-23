<template>
	<UniEasyInput :value='userPassword' :type='type' :password='true' :styles="styles" :placeholder='placeholder'
		:primaryColor='primaryColor' @focus='focus' @blur="blur" @input='input' />
</template>

<script setup lang="ts">
	import { ref, computed } from 'vue';

	import { useLoginStore } from '@/store';

	import { uiConfig } from '@/config';
	import { defaultBasicInputProps } from '@/types/basicInputProps';

	import UniEasyInput from '@/componentsUI/Inputs/UniEasyInput.vue';

	const props = defineProps(defaultBasicInputProps as any);

	const type = 'password';

	const component_uiConfig = uiConfig['login-userPassword-input'];

	const userPassword = useLoginStore(state => state.userPassword);

	const placeholder = component_uiConfig.placeholder;

	const primaryColor = uiConfig.primaryColor;

	const styles = computed(() => {
		return {
			...props.styles,
			inputContentStyle: {
				'border-color': isFocus.value ? uiConfig.primaryColor : component_uiConfig.borderColor,
				'border-width': '2px',
				'border-radius': component_uiConfig.borderRadius,
				'background-color': component_uiConfig.bgColor,
			},
			inputStyle: {
				color: component_uiConfig.color,
				height: component_uiConfig.height,
				padding: component_uiConfig.padding,
			},
		}
	});

	const isFocus = ref(false);

	const input = (val : any) => {
		useLoginStore.setState({ userPassword: val });
	};

	const focus = (e : any) => {
		props.focus && props.focus(e);
		isFocus.value = true;
	};

	const blur = (e : any) => {
		props.blur && props.blur(e);
		isFocus.value = false;
	};
</script>

<style></style>