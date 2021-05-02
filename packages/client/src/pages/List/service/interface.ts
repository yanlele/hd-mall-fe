export interface GetProductListRequestParams {
  page: number;
  page_size: number;
  category_id?: string; // 商品分类
  type?: string; // 商品类型
  sort_type?: string; // 排序类型
  max?: string; // 最高价格
  min?: string; // 最低价格
  query?: string; // 搜索条件
}
