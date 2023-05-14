<template>
  <view>
    <text></text>
    <text @click="onClick">点击发送请求</text>
    <view>
      {{requestState.loading ? '加载中...' : '请求完毕'}}
    </view>
    <view>
      {{!requestState.loading && JSON.stringify(requestState.data)}}
    </view>
  </view>
</template>

<script setup lang="ts">
import API from '../API'

const requestState = API.getNameList.useRequest();

const onClick = async () => {
  requestState.run();
}
</script>

<style>
</style>
