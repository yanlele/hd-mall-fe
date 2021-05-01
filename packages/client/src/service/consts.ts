import request from '@src/utils/axios';
import { getUserInfoApiUrl } from '@hd/common/service/consts';

// 获取用户信心
export const getUserInfoRequest = () => request({ url: getUserInfoApiUrl });
