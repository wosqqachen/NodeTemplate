import { FecthUserInfoResp, FetchGeographyResp } from './model/UserType';
/**
 * @description: 不提示获取用户信息
 */
export function selectByUserIdBySlient(params?: any) {
  return useDefaultRequest.get<FecthUserInfoResp>('/user/selectByUserId', params, {
    ignoreCatch: true, // 不走统一拦截，一个法外之地的接口
    ignoreGlobalErrorMessage: true, // 报错不提示
  });
}

/**
 * @description: 获取用户信息
 */
export function selectByUserId(params?: any) {
  return useDefaultRequest.get<FecthUserInfoResp>('/user/selectByUserId', params);
}

/**
 * @description: 获取yapi的地理信息
 */
export function fetchGeography(params?: any) {
  return useDefaultRequest.get<FetchGeographyResp>(
    'https://yapi.api.com/mock/1357/api/geography',
    params
  );
}
