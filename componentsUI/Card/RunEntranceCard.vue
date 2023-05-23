<template>
	<view class="card-container" :class="props.class" :style="props.style">
		<view class="header" :class="props.headerClass" :style="props.headerStyle">
			<view class='iconButton' :class="props.iconButtonClass"
				:style="`background-color: ${props.primaryColor};${props.iconButtonStyle}`">
				<uni-icons custom-prefix="iconfont" :type="`icon-${props.iconType}`" :size="props.iconSize"
					color="#fff"></uni-icons>
			</view>
			<view class='actionButton' :class="props.actionButtonClass"
				:style="`color: ${props.primaryColor};${props.actionButtonStyle}`">
				{{props.actionButtonText}}
			</view>
		</view>
		<view class="content">
			<view class='title'>
				{{props.title}}
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	const props = defineProps({
		primaryColor: { type: String, default: '#fe880a' },
		style: String,
		class: String,
		title: { type: String, default: '开始跑步' },
		headerClass: String,
		headerStyle: String,
		iconButtonClass: String,
		iconButtonStyle: String,
		iconType: { type: String, default: 'run_people' },
		iconSize: { type: Number, default: 25 },
		iconColor: { type: String, default: '#fff' },

		actionButtonClass: String,
		actionButtonStyle: String,
		actionButtonText: { type: String, default: 'Go' },
	});
</script>

<style>
	.card-container {
		background-color: #fff;
		border-radius: 20px;
		padding: 20px 12px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.iconButton {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-color: #fe880a;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.actionButton {
		width: 40px;
		height: 25px;
		border-radius: 20px;
		font-size: 14px;
		background-color: #fafafa;
		color: #f79806;
		font-weight: bold;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.content {}

	.title {
		color: #000;
		font-weight: bold;
	}
</style>