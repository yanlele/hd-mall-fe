import request from '@src/utils/axios';
import { getProductListApiUrl } from '@hd/common/service/consts';

// 获取商品列表
export const getProductListRequest = (data: any) => request({ url: getProductListApiUrl, method: 'post', data });
