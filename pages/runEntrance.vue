<template>
	<view class="page">
		<view class="mapContainer">
			<map class='map' style="width: 100%; height: 100%;" :scale="mapProps.scale"
				:show-compass="mapProps['show-compass']" :enable-zoom="mapProps['enable-zoom']"
				:enable-scroll="mapProps['enable-scroll']">

				<corver-view class='map-corver-actions'>
					<RunShortStartButton />
				</corver-view>
			</map>
		</view>
	</view>
</template>

<script setup lang="ts">
	import RunShortStartButton from '@/componentsBusiness/Buttons/RunShortStartButton.vue';

	const mapProps = {
		'longitude': null, // 中心经度
		'latitude': null, // 中心纬度
		'layer-style': 1, // 个性化地图
		'markers': [], // 标记点
		'polyline': [], // 路线
		'show-compass': false, // 是否显示指南针
		'scale': 16, // 缩放级别，取值范围为3-20
		'min-scale': 16, // 最小缩放级别
		'max-scale': 16, // 最大缩放级别
		'enable-zoom': false, // 是否支持缩放
		'enable-scroll': false, // 是否支持拖动
		'enable-rotate': false, // 是否支持旋转
		'enable-traffic': true, // 是否开启实时路况
		'enable-poi': false, // 是否展示 POI 点
		'show-location': false, // 显示带有方向的当前定位点
	}
</script>

<style>
	.page {
		width: 100%;
		min-width: 0px;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		padding: 0 12px;
	}

	.mapContainer {
		flex: 0.98;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 22px;
		overflow: hidden;
	}

	.map {
		position: relative;
	}

	.map-corver-actions {
		position: absolute;
		z-index: 10;
		width: 100%;
		bottom: 15%;
	}
</style>