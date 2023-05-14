<template>
  <view>
    <text>{{state.title}}</text>
    <text @click="onClick">点击</text>
    <view>
      {{requestRes.loading ? 'loading...' : 'loaded'}}
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import API from '@/services'

const state = reactive({ title: 'Hello' })

const requestRes = API.getNameList.useRequest({ manual: true })

const onClick = async () => {
  state.title = '1'
  const data = await API.getNameList.request({format: (res)=> res});
  console.log(data);
}
</script>

<style>
</style>
