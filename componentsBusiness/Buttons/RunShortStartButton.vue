<template>
	<button :style='style' @click='click'>{{children}}</button>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	import { uiConfig } from '@/config';
	import { objToStrStyle } from '@/utils';
	import { defaultButtonProps } from '@/types/buttonProps';

	const props = defineProps(defaultButtonProps as any);

	const component_uiConfig = uiConfig['run-short-start-button'];

	const children = component_uiConfig.text;

	const style = computed(() => {
		return objToStrStyle({
			...component_uiConfig.style,
		}) + `${props.style}`;
	});

	const click = async () => {
		console.log('run start');
	};
</script>

<style>

</style>