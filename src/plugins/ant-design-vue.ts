import { message } from 'ant-design-vue';
import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib

export default defineNuxtPlugin(() => {
  return {
    provide: {
      message,
    },
  };
});
