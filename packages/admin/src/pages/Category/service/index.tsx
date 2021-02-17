import request from '@src/utils/axios';
import { getCategoryListApiUrl } from '@src/pages/Category/service/consts';

// 获取分类列表
export const getCategoryListRequest = () => request({ url: getCategoryListApiUrl });
