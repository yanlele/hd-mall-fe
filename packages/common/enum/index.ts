export enum ImageType {
  productImage = 1, // 商品图
  productDetail, // 商品详情图
  bannerMain, // banner
  bannerSubjoin, // banner 附加图
}

//		1 - 热销产品
//		2 - 店家推荐
//		3 - 新品上架
//		4 - 优惠活动
//		5 - 有礼相送
//    6 - 限时折扣
export enum ProductTagEnum {
  unknown,
  hot = 1,
  recommend,
  new,
  discounts,
  present,
  limitedTimeDiscount,
}

export const ProductTag: { [key: number]: string } = {
  [ProductTagEnum.unknown]: '',
  [ProductTagEnum.hot]: '热销产品',
  [ProductTagEnum.recommend]: '店家推荐',
  [ProductTagEnum.new]: '新品上架',
  [ProductTagEnum.discounts]: '优惠活动',
  [ProductTagEnum.present]: '有礼相送',
  [ProductTagEnum.limitedTimeDiscount]: '限时折扣',
};

export enum CategoryTypeEnum {
  unknown,
  normal,
  primary,
}

export const CategoryType: { [key: number]: string } = {
  [1]: '普通',
  [2]: '主要分类',
};

export enum ProductStatusEnum {
  unknown,
  up,
  down,
}

export const ProductStatus: { [key: number]: string } = {
  [ProductStatusEnum.unknown]: '',
  [ProductStatusEnum.up]: '上架',
  [ProductStatusEnum.down]: '下架',
};
