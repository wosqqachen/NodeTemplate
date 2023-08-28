export default defineNuxtPlugin(() =>
  // useNuxtApp
  {
    return {
      provide: {
        hello: (msg: string) => {
          return `Hello ${msg}!`;
        },
      },
    };
  }
);
