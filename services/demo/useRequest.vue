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
import useRequest from '../useRequest'

const requestState = useRequest({
  url: '/api/talentsServices/getFinaceJobFairlist.do',
  method: 'GET',
  params: { a : 1 },
})

const onClick = async () => {
  requestState.run();
}
</script>

<style>
</style>
