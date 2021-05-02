import request from '@src/utils/axios';
import { getProductDetailApiUrl } from '@hd/common/service/consts';

export const getDetailRequest = (id: string) => {
  return request({ url: getProductDetailApiUrl, params: { id } });
};
