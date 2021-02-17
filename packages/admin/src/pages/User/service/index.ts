import request from '@src/utils/axios';
import { getUserInfoApiUrl, loginApiUrl, logoutApiUrl } from '@src/pages/User/service/consts';
import { AuthUserRequestParams } from '@src/pages/User/service/interface';

// 获取用户信息
export const getUserInfoRequest = () => request({ url: getUserInfoApiUrl });

// 登录用户
export const authUserRequest = (data: AuthUserRequestParams) =>
  request({
    url: loginApiUrl,
    data,
    method: 'post',
  });

// 退出登录
export const logoutRequest = () => request({ url: logoutApiUrl });
