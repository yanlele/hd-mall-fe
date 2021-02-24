import { getCategoryListApiUrl, getProductListApiUrl } from '@hd/common/service/consts';
import request from '@src/utils/axios';

// 获取分类列表
export const GetCategoryListRequest = () =>
  request({
    url: getCategoryListApiUrl,
  });

export const GetProductListRequest = (params: { category_id: number }) =>
  request({
    url: getProductListApiUrl,
    params,
  });
