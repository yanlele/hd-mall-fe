import request from '@src/utils/axios';
import { createProductApiUrl, getProductListApiUrl } from '@src/pages/Product/service/consts';

export const getProductListRequest = (data: any) =>
  request({
    url: getProductListApiUrl,
    params: data,
  });

export const createProductRequest = (data: any) =>
  request({
    url: createProductApiUrl,
    method: 'post',
    data,
  });
