import request from '@src/utils/axios';
import {
  createProductApiUrl,
  deleteProductApiUrl,
  getProductImageApiUrl,
  getProductListApiUrl,
} from '@src/pages/Product/service/consts';
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

export const deleteProductRequest = (data: { id: number }) =>
  request({
    url: deleteProductApiUrl,
    method: 'post',
    data,
  });

export const getProductImageRequest = (params: { product_id: number }) =>
  request({
    url: getProductImageApiUrl,
    params,
  });
