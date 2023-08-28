<template>
  <div class="post-id">
    <h1 class="text-3xl mt-20">动态路由</h1>
    <p class="text-base text-gray-600">
      如果将任何内容放在方括号内，它将被转换为路由参数。在文件名或目录中混合和匹配多个参数。
    </p>
    <ul class="text-base text-gray-600">
      <li>
        获取到的 group 是
        <span class="text-green-500 text-xl">{{ group }}</span>
      </li>
      <li>
        获取到的 id 是
        <span class="text-green-500 text-xl">{{ id }}</span>
      </li>
    </ul>
    <div class="h-10">
      <a-button type="primary" @click="$message.info('测试提示')">弹出 antd-message 提示</a-button>
    </div>
    <div class="h-10">
      <NuxtLink to="/">NuxtLink形式回到首页</NuxtLink>
    </div>
    <div class="h-10">
      <a-button @click="handlerToHome">router.push形式回到首页</a-button>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    validate: async (route) => {
      return /^\d+$/.test(route.params.id);
    },
  });

  const route = useRoute();
  const router = useRouter();
  const { group, id } = route.params;

  console.log(router.getRoutes());

  const handlerToHome = () => {
    router.push('/');
  };
</script>
<style lang="less" scoped>
  .post-id {
    width: 80vw;
    margin: 0 auto;
  }
</style>
