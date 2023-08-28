import { FecthUserInfoResp } from './model/ProductType';

/**
 * @description: 查询楼层和商品
 */
export function fetchHomeFloorSpuList() {
  return useDefaultRequest.post<FecthUserInfoResp>('/floor/listHomeFloorSpu');
}
