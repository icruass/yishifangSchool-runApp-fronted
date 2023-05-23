<template>
	<uni-popup ref="uniPopupRef" type="message" :animation="props.animation"
		:background-color="props['background-color']" :is-mask-click="props['is-mask-click']"
		:mask-background-color="props['mask-background-color']" :safe-area="props['safe-area']" @change="props.change"
		@maskClick="props.maskClick">
		<uni-popup-message :type="type" :message="text" :duration="duration"></uni-popup-message>
	</uni-popup>
</template>

<script setup lang="ts">
	import { ref, onMounted, } from 'vue';

	import { defaultMessageProps } from '@/types/messageProps';

	import { useMessageStore } from "./messageStore";

	const props = defineProps(defaultMessageProps as any);

	const uniPopupRef = ref(null);

	const text = useMessageStore(state => state.globalMessageOptions.text);
	const duration = useMessageStore(state => state.globalMessageOptions.duration);
	const type = useMessageStore(state => state.globalMessageOptions.type);

	const setGlobalMessageRef = useMessageStore(state => state.setGlobalMessageRef);

	onMounted(() => {
		setGlobalMessageRef(uniPopupRef.value);
	});
</script>

<style>
</style>