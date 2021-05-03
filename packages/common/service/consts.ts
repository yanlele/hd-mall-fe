import { ApiClientPrefix } from '../consts';

// 获取分类列表
export const getCategoryListApiUrl = `${ApiClientPrefix}/category/list`;

// 获取商品列表
export const getProductListApiUrl = `${ApiClientPrefix}/product/list`;

// 获取主要分类的商品 - 用于渲染首页
export const getCategoryPrimaryListApiUrl = `${ApiClientPrefix}/product/primary`;

// 获取打折商品
export const getDiscountListApiUrl = `${ApiClientPrefix}/product/discount`;

// 获取banner信息
export const getBannerListApiUrl = `${ApiClientPrefix}/banner/list`;

// 获取用户信息
export const getUserInfoApiUrl = `${ApiClientPrefix}/user/info`;

// 更新用户信息
export const updateUserInfoApiUrl = `${ApiClientPrefix}/user/update`;

// 注册
export const registerApiUrl = `${ApiClientPrefix}/user/create`;

// 登录
export const loginApiUrl = `${ApiClientPrefix}/auth/login`;

// 退出登录
export const logoutApiUrl = `${ApiClientPrefix}/auth/logout`;

// 获取商品详情
export const getProductDetailApiUrl = `${ApiClientPrefix}/product/get_detail`;

// 获取地址
export const getAddressListApiUrl = `${ApiClientPrefix}/address/list`;

// 设置默认地址
export const setDefaultAddressApiUrl = `${ApiClientPrefix}/address/set_default`;

// 修改地址
export const updateAddressApiUrl = `${ApiClientPrefix}/address/update`;

// 创建新地址
export const createAddressApiUrl = `${ApiClientPrefix}/address/create`;

// 删除地址
export const deleteAddressApiUrl = `${ApiClientPrefix}/address/delete`;

// shoppingCart
export const shoppingCartApiUrl = {
  create: `${ApiClientPrefix}/shopping_cart/create`,
  get: `${ApiClientPrefix}/shopping_cart/get`,
  delete: `${ApiClientPrefix}/shopping_cart/delete`,
  update: `${ApiClientPrefix}/shopping_cart/update`,
  getDetailById: `${ApiClientPrefix}/shopping_cart/get_by_id`,
  getDetailListByTempOrderId: `${ApiClientPrefix}/shopping_cart/get_by_temp_order_id`,
  settleAccounts: `${ApiClientPrefix}/shopping_cart/settle_accounts`,
};

