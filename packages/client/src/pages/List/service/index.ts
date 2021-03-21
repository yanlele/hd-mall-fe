import request from '@src/utils/axios';
import { getProductListApiUrl } from '@hd/common/service/consts';
import { GetProductListRequestParams } from '@src/pages/List/service/interface';

// 获取商品列表
export const getProductListRequest = (data: GetProductListRequestParams) =>
  request({ url: getProductListApiUrl, method: 'post', data });
