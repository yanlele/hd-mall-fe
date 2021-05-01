import request from '@src/utils/axios';
import { getUserInfoApiUrl, loginApiUrl, registerApiUrl, logoutApiUrl } from '@hd/common/service/consts';
import { RegisterParams } from '@src/service/interface';

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
