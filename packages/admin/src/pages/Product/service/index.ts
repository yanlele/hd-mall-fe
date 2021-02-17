import request from '@src/utils/axios';
import { createProductApiUrl, getProductListApiUrl } from '@src/pages/Product/service/consts';
import { GetProductListRequestParams } from '@src/pages/Product/service/interface';

export const getProductListRequest = (data: GetProductListRequestParams) =>
  request({
    url: getProductListApiUrl,
    method: 'post',
    data,
  });

export const createProductRequest = (data: any) =>
  request({
    url: createProductApiUrl,
    method: 'post',
    data,
  });
