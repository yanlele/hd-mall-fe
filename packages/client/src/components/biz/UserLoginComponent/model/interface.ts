export interface UserInfoModelState {
  modalControl: {
    visible: boolean;
    type: 'login' | 'register';
  };
  userInfo: any;
}
