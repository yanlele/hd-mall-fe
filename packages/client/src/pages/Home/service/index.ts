import { getCategoryListApiUrl, getCategoryPrimaryListApiUrl, getDiscountListApiUrl } from '@hd/common/service/consts';
import request from '@src/utils/axios';

// 获取分类列表
export const GetCategoryListRequest = () => request({ url: getCategoryListApiUrl });

// 获取重要分类信息以及分类信息下面的所有商品
export const getPrimaryCategoryList = () => request({ url: getCategoryPrimaryListApiUrl });

// 获取折扣商品
export const getDiscountProductList = () => request({ url: getDiscountListApiUrl });
