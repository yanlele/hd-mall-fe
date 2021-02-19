import request from '@src/utils/axios';
import {
  createCategoryApiUrl,
  deleteCategoryApiUrl,
  getCategoryListApiUrl,
  updateCategoryApiUrl,
} from '@src/pages/Category/service/consts';
import { CreateCategoryRequestParams } from '@src/pages/Category/service/interface';

// 获取分类列表
export const getCategoryListRequest = () => request({ url: getCategoryListApiUrl });

// 创建分类
export const createCategoryRequest = (data: CreateCategoryRequestParams) =>
  request({
    url: createCategoryApiUrl,
    method: 'post',
    data,
  });

// 删除
export const deleteCategoryRequest = (params: { id: number }) =>
  request({
    url: deleteCategoryApiUrl,
    method: 'post',
    data: params,
  });

export const updateCategoryRequest = (data: CreateCategoryRequestParams) =>
  request({
    url: updateCategoryApiUrl,
    method: 'post',
    data,
  });
