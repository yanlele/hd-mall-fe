import request from '@src/utils/axios';
import { getUserInfoApiUrl } from '@src/pages/User/service/consts';

// 获取用户信息
export const getUserInfoRequest = () => request({ url: getUserInfoApiUrl });
