<template>
  <view>
    <text>{{state.title}}</text>
    <text @click="setTitle">点击改变</text>
  </view>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({ title: 'Hello' })
const setTitle = () => {
  state.title = '1'
}
</script>

<style>
</style>
