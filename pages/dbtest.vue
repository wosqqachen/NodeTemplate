<script setup lang="ts">
const { data } = await useFetch('/api/datalist')
// console.log('api/datalist', JSON.parse(data)?.data?.res)
// const userArr = JSON.parse(data)?.data?.res
// const { data2 } = await useAsyncData('hello', () => $fetch('/api/ip'))
// console.log('data2', data2)
const data3 = await useFetch('/api/ip', { server: false })
console.log('data3', data3.data.value)
</script>

<template>
  <div class="markdown" font-sans>
    我是连接{{ data3.data }}数据库页面获取用户数据
    <div class="tabs">
      <div v-for="(item, index) in JSON.parse(data)?.data?.res" :key="`cz${index}`">
        昵称：{{ item.name }}；年龄：{{ item.age }}；性别：{{ item.sex }}
      </div>
    </div>
  </div>
</template>

<style>
.markdown h2>a,
.markdown h3>a {
  text-decoration-line: none;
  --at-apply: "relative font-sans text-2xl no-underline hover:(underline underline-dashed)";
}
</style>
