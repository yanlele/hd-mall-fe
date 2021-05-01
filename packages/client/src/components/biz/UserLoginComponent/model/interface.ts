export interface UserInfoModelState {
  modalControl: {
    visible: boolean;
    type: 'login' | 'register';
    loading: boolean;
  };
  userInfo: any;
}
