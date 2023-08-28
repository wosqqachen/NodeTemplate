import type { NuxtConfig } from '@nuxt/schema';
export const createRuntimeConfig = (): NuxtConfig['runtimeConfig'] => {
  return {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      loginUrl: process.env.NUXT_PUBLIC_LOGIN_URL,
      locationOriginUrl: process.env.NUXT_PUBLIC_LOCATION_ORIGIN_URL,
    },
  };
};
