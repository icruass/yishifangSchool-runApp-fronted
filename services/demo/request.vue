<template>
  <view>
    <text></text>
    <text @click="onClick">点击发送请求</text>
    <view>
      {{state.loading ? '加载中...' : '请求完毕'}}
    </view>
    <view>
      {{!state.loading && JSON.stringify(state.data)}}
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import request from '../request'

const state = reactive({ loading: false, data: {} })

const apiGetData = async (params?: any) => {
  state.loading = true
  const data = await request({
    url: '/api/talentsServices/getFinaceJobFairlist.do',
    method: 'GET',
    data: params
  })
  state.data = data || {}
  state.loading = false
  return data
}

onMounted(() => {
  apiGetData()
})

const onClick = async () => {
  apiGetData()
}
</script>

<style>
</style>
