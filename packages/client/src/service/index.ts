import request from '@src/utils/axios';
import {
  getUserInfoApiUrl,
  loginApiUrl,
  registerApiUrl,
  logoutApiUrl,
  getAddressListApiUrl,
  updateAddressApiUrl,
  createAddressApiUrl,
  setDefaultAddressApiUrl,
  deleteAddressApiUrl,
  shoppingCartApiUrl,
  orderApiUrl,
  getAddressByIdApiUrl,
} from '@hd/common/service/consts';
import { RegisterParams } from '@src/service/interface';

// 公共接口逻辑部分

/* ==============================  用户信息系与登录信息 - Start ============================== */

// 获取用户信息
export const getUserInfoRequest = () => request({ url: getUserInfoApiUrl }, { tipMessage: false });

// 注册
export const registerRequest = (data: RegisterParams) =>
  request({
    url: registerApiUrl,
    method: 'post',
    data,
  });

// 登录请求
export const loginRequest = (data: RegisterParams) =>
  request(
    {
      url: loginApiUrl,
      method: 'post',
      data,
    },
    {
      tipMessage: false,
    },
  );

// 退出登录
export const logoutRequest = () => request({ url: logoutApiUrl });

/* ==============================  用户信息与登录信息 - Start ============================== */

/* ==============================  地址信息 - Start ============================== */

export const getAddressByIdRequest = (id: number) => request({ url: getAddressByIdApiUrl, params: { id } });

// 地址 - 获取地址列表
export const getAddressListRequest = () => request({ url: getAddressListApiUrl });

// 地址 - 更新地址
export const updateAddressRequest = (data: any) =>
  request({
    url: updateAddressApiUrl,
    method: 'post',
    data,
  });

// 地址 - 创建地址
export const createAddressRequest = (data: any) =>
  request({
    url: createAddressApiUrl,
    method: 'post',
    data,
  });

// 地址 - 设置默认地址 - 参数是默认地址的id
export const setDefaultAddressRequest = (id: number) =>
  request({
    url: setDefaultAddressApiUrl,
    method: 'post',
    data: { id },
  });

// 地址 - 删除地址
export const deleteAddressRequest = (id: number) =>
  request({
    url: deleteAddressApiUrl,
    method: 'post',
    data: { id },
  });
/* ==============================  地址信息 - End   ============================== */

/* ==============================  购物车 - Start ============================== */
/**
 * 创建
 * @param list
 *
 * 参数：
 *  product_id
 *  count
 *  type 1 - 购物车；2 - 临时订单信息
 */
export const shoppingCartCreate = (data: any) =>
  request({
    url: shoppingCartApiUrl.create,
    data,
    method: 'post',
  });

// 根据id获取详情
export const shoppingCartGetByIdRequest = (id: string) =>
  request({
    url: shoppingCartApiUrl.getDetailById,
    params: { id },
  });

// 根据 tempOrderId 查询， 获取列表
export const getDetailListByTempOrderIdRequest = (temp_order_id: string) =>
  request({
    url: shoppingCartApiUrl.getDetailListByTempOrderId,
    params: { temp_order_id },
  });

// 获取列表
export const getShoppingCartDetailListRequest = (params: any) =>
  request({
    url: shoppingCartApiUrl.get,
    params,
  });

// 更新 - 实际上只能更新数量
export const updateShoppingCartRequest = (data: any) =>
  request({
    url: shoppingCartApiUrl.update,
    data,
    method: 'post',
  });

// 删除购物车
export const deleteShoppingCartRequest = (data: any) =>
  request({
    url: shoppingCartApiUrl.delete,
    data,
    method: 'post',
  });

// 购物车结账
export const settleAccountsRequest = (data: any[]) =>
  request({
    url: shoppingCartApiUrl.settleAccounts,
    data,
    method: 'post',
  });
/* ==============================  购物车 - End   ============================== */

/* ==============================  订单 - Start ============================== */
// 创建订单接口
export const orderCreateRequest = (data: any) =>
  request({
    url: orderApiUrl.create,
    data,
    method: 'post',
  });

// 获取详情
export const getOrderDetailRequest = (id: string) => request({ url: orderApiUrl.getById, params: { id } });

// 获取订单列表
export const getOrderList = () => request({ url: orderApiUrl.getList });

// 删除订单
export const deleteOrderRequest = (data: any) => request({ url: orderApiUrl.delete, data, method: 'post' });

// 更新该订单
export const updateOrderRequest = (data: any) => request({ url: orderApiUrl.update, data, method: 'post' });
/* ==============================  订单 - End   ============================== */
