import { defineStore } from 'pinia';
import { selectByUserIdBySlient } from '~/api/modules/system/user';
import { FecthUserInfoResp } from '~/api/modules/system/model/UserType';
export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: {},
  }),
  getters: {
    getUserInfo(): FecthUserInfoResp {
      return this.userInfo || {};
    },
  },
  actions: {
    async fetchUserInfo(): Promise<FecthUserInfoResp> {
      // const res = await selectByUserIdBySlient();
      // if ((res as FecthUserInfoResp)?.userId) {
      //   this.userInfo = res;
      // } else {
      //   this.userInfo = {};
      // }
      return { ...this.userInfo };
    },
  },
  // pinia 状态持久化配置。不推荐使用。
  // 原理：在状态发生变化时，将状态数据保存到本地存储中；在应用程序启动或页面刷新时，从本地存储中读取之前保存的状态数据并恢复到 Pinia 中
  // 不推荐原因：测试过程中发现，状态值是对象时，持久化后，新的状态值对象会合并旧的状态值对象，导致数据异常。
  // 比如：旧值 { a: 1, b: 2 }，新值 { a: 3, c: 4 }，持久化后的值 { a: 3, b: 2, c: 4 }
  // persist: {
  //   storage: persistedState.localStorage,
  // },
});
