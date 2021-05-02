import request from '@src/utils/axios';
import { getProductDetailApiUrl } from '@hd/common/service/consts';

export const getDetailRequest = (id: string) => {
  console.log('id', id);
  return request({ url: getProductDetailApiUrl, params: { id } });
};
