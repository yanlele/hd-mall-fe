import { ApiClientPrefix } from '../consts';

// 获取分类列表
export const getCategoryListApiUrl = `${ApiClientPrefix}/category/list`;

// 获取商品列表
export const getProductListApiUrl = `${ApiClientPrefix}/product/list`;

// 获取主要分类的商品
export const getCategoryPrimaryListApiUrl = `${ApiClientPrefix}/product/primary`;

// 获取打折商品
export const getDiscountListApiUrl = `${ApiClientPrefix}/product/discount`;

// 获取banner信息
export const getBannerListApiUrl = `${ApiClientPrefix}/banner/list`;

// 获取用户信息
export const getUserInfoApiUrl = `${ApiClientPrefix}/user/info`;

// 更新用户信息
export const updateUserInfoApiUrl = `${ApiClientPrefix}/user/update`;

// 登录
export const loginApiUrl = `${ApiClientPrefix}/auth/login`;

// 注册
export const registerApiUrl = `${ApiClientPrefix}/auth/register`;
