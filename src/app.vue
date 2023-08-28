<template>
  <!-- 放在顶级页面 -->
  <NuxtPage />
</template>
<script setup>
  // console.log("app.vue setup");
  useHead({
    // as a string,
    // where `%s` is replaced with the title
    titleTemplate: '%s - Site Title',
    // ... or as a function
    titleTemplate: (productCategory) => {
      return productCategory ? `${productCategory} - Site Title` : 'Site Title';
    },
  });
</script>
