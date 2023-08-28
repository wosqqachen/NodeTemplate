<template>
  <NuxtLayout>
    <div class="fetch">
      <a-card v-if="floorList" hoverable style="width: 300px">
        <a-select
          v-model:value="value"
          label-in-value
          style="width: 200px"
          :options="options"
          @change="handleChange"
        />

        <a-divider orientation="left">获得选项的文本</a-divider>

        <div>
          默认情况下 onChange 里只能拿到 value，如果需要拿到选中的节点文本 label，可以使用
          labelInValue 属性。 选中项的 label 会被包装到 value 中传递给 onChange 等函数，此时 value
          是一个对象。
        </div>

        <template #actions>
          <setting-outlined @click="handlerThrowError" />
          <edit-outlined />
          <ellipsis-outlined />
        </template>
      </a-card>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
  import { DefaultOptionType, SelectValue } from 'ant-design-vue/lib/select';
  import {
    selectByUserId,
    //  fetchGeography
  } from '~/api/modules/system/user';
  // import { FetchGeographyResp } from '~/api/modules/system/model/UserType';

// await selectByUserId();

  const {
    data: geographyData,
    // pending,
    // error,
    // refresh,
  } = await useAsyncData(
    'mountains',
    () => $fetch('https://yapi.api.com/mock/1357/api/geography'),
    {
      pick: ['data'],
    }
  );

  const options = ref(geographyData.value?.data?.mountain || []);

  const value = ref<SelectValue>();
  const handleChange = (value: SelectValue, option: DefaultOptionType | DefaultOptionType[]) => {
    console.log(value, option);
  };

  const { data: floorList } = await useAsyncData(
    'floorList',
    () =>
      $fetch('https://nuxt3.api.com/mall/api/floor/listHomeFloorSpu', {
        method: 'POST',
      }),
    {
      lazy: true,
    }
  );

  const handlerThrowError = () => {
    throw createError({
      statusCode: 500,
      statusMessage: '服务器发生错误，请稍后重试',
      fatal: true,
    });
  };
</script>

<style lang="less" scoped>
  .fetch {
    width: 80vw;
    margin: 0 auto;
    padding: 40px 0;
  }
</style>
