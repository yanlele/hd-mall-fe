import { UserInfoModelState } from '@src/components/biz/UserLoginComponent/model/interface';

export const defaultUserInfoModelState: UserInfoModelState = {
  modalControl: {
    visible: false,
    type: 'login',
    loading: false,
  },
  userInfo: {},
};
