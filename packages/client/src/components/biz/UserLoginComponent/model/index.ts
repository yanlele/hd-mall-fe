import { atom } from 'recoil';
import { defaultUserInfoModelState } from '@src/components/biz/UserLoginComponent/model/consts';

export const userInfoModel = atom({
  key: 'userInfoModel',
  default: defaultUserInfoModelState,
});
