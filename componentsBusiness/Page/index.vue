<template>
	<view>
		<slot name="default"></slot>
		<Message />
	</view>
</template>

<script setup lang="ts">
	import Message from "@/manager/message/Message.vue"
</script>

<style>

</style>