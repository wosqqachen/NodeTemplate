<template>
  <a-result
    status="error"
    :title="error.statusCode"
    :sub-title="error.message || error.statusMessage || '服务器发生错误，请联系管理员JIM'"
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>
    <div v-if="!error.stack" class="desc">
      <p style="font-size: 16px">
        <strong>The content you submitted has the following error:</strong>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account is not yet eligible to apply
        <a>Apply Unlock &gt;</a>
      </p>
    </div>
    <div v-else v-html="error.stack"></div>
  </a-result>
</template>
<script setup>
  import { CloseCircleOutlined } from '@ant-design/icons-vue';
  const props = defineProps({
    error: Object,
  });
  const { error } = toRefs(props);
</script>
<style lang="less" scoped>
  .desc p {
    margin-bottom: 1em;
  }
</style>
