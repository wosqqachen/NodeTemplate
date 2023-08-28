import type { NuxtConfig } from '@nuxt/schema';
import { createVitePlugins } from './plugins';
export const createViteConfig = (): NuxtConfig['vite'] => {
  return {
    ssr: {
      noExternal: ['@arco-design/web-vue'],
    },
    plugins: createVitePlugins(),
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "@/assets/styles/index.less";',
          modifyVars: {
            'primary-color': '#04dc82',
          },
          javascriptEnabled: true,
        },
      },
    },
  };
};
