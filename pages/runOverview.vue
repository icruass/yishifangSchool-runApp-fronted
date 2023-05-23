<template>
	<view class="page">
		<view class="tip">
			<view>
				<view>
					<text style="font-size: 16px;">运动</text>
				</view>
				<view>
					<text style="font-size: 12px;">快去运动一下吧!</text>
				</view>
			</view>
		</view>
		<view style="display: flex; margin-bottom: 20px;">
			<RunEntranceCard title="开始跑步" primaryColor="#fe880a" iconType="run_people" actionButtonText="Go"
				style="flex: 1" />

			<text style="padding: 0 10px"></text>

			<RunEntranceCard title="运动排名" primaryColor="#45abff" iconType="ranking" actionButtonText="Go"
				style="flex: 1" />
		</view>

		<view style="display: flex;">
			<RunEntranceCard title="我的记录" primaryColor="#fdc528" iconType="record" actionButtonText="Go"
				style="flex: 1" />

			<text style="padding: 0 10px"></text>

			<RunEntranceCard title="我的得分" primaryColor="#13d477" iconType="score" actionButtonText="Go"
				style="flex: 1" />
		</view>

		<uv-tabbar :fixed="true" :placeholder="false" :safeAreaInsetBottom="true">
			<uv-tabbar-item text="首页" icon="home"></uv-tabbar-item>
			<uv-tabbar-item text="放映厅" icon="photo"></uv-tabbar-item>
			<uv-tabbar-item text="直播" icon="play-right"></uv-tabbar-item>
			<uv-tabbar-item text="我的" icon="account"></uv-tabbar-item>
		</uv-tabbar>
	</view>
</template>

<script setup lang="ts">
	import RunEntranceCard from '@/componentsUI/Card/RunEntranceCard.vue';
	import '@/manager/router/utils'
</script>

<style>
	.page {
		height: 98%;
		padding: 0 12px 12px 12px;
		background-image: linear-gradient(to bottom, #e6f7ff 15%, #fafafa 20%);
	}

	.tip {
		width: 100%;
		padding: 0 10px;
		margin-bottom: 20px;
	}

	.card {
		background-color: #fff;
		border-radius: 20px;
		padding: 20px 12px;
	}
</style>