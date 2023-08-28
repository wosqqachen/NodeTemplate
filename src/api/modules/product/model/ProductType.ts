export type HomeFloorSpuItem = {
  baseImage: string; // 商品底图url
  canBuySpu: boolean; // 是否可以购买
  channelSpuLabel: string; // 渠道spuLabel
  corner: string; // 角标信息
  currentVersion: boolean; // 是否当前版本
  detailIntro: string; // 商品详细介绍
  floorSpuId: number; // 楼层spuId
  floorSpuSort: number; // 楼层spu排序
  labels: string[]; // 标签
  lowestChannelPrice: number; // 商品该渠道所有SKU最低的价格
  lowestPriceSkuOriginalPrice: number; // 商品sku最低原价-对应渠道最低价格sku的原价
  lowestPriceSkuTimeSpecName: string; // 原价sku时间规格名称
  shortIntro: string; // 商品简介
  spuId: number; // spuId
  spuName: string; // spu名称
};

export type FloorItem = {
  businessType: number; // 楼层类型 1-营销 2-设计 3-渲染券 4-其他
  floorId: number; // 楼层id
  floorName: string; // 楼层名称
  floorSort: number; // 楼层排序
  homeFloorSpuList: HomeFloorSpuItem[]; // 首页楼层商品信息
};

export type FecthUserInfoResp = {
  floorList: FloorItem[]; // 楼层信息
  floorType: string; // 楼层类型
  floorTypeName: string; // 楼层类型名称
  floorTypeSort: number; // 楼层类型排序
};
