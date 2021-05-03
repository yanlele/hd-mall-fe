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
export const shoppingCartCreate = (list: any[]) =>
  request({
    url: shoppingCartApiUrl.create,
    data: list,
    method: 'post',
  });
/* ==============================  购物车 - End   ============================== */
