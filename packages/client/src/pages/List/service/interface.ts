export interface GetProductListRequestParams {
  page: number;
  page_size: number;
  category_id?: number; // 商品分类id
  // 商品类型
  // 1 - 仅看有货
  // 2 - 促销商品
  // 3 - 热卖、打折货
  type?: string;

  // 排序类型
  // 1 - 综合、默认排序
  // 2 - 销量
  // 3 - 新品
  sort_type?: string;

  max?: string; // 最高价格
  min?: string; // 最低价格
  query?: string; // 搜索条件
}
