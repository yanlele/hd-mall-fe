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
export enum ProductTag {
  hot = 1,
  recommend,
  new,
  discounts,
  present,
}

export const CategoryType: { [key: number]: string } = {
  [0]: '普通',
  [1]: '主要分类',
};
