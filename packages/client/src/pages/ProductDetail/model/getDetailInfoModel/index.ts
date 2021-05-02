import { atom } from 'recoil';
import { defaultGetDetailInfoModelState } from '@src/pages/ProductDetail/model/getDetailInfoModel/consts';

const getDetailInfoModel = atom({
  key: 'getDetailInfoModel',
  default: defaultGetDetailInfoModelState,
});

export default getDetailInfoModel;
