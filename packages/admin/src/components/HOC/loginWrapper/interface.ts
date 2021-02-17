import { Dispatch, SetStateAction } from 'react';

export interface UseGetUserInfoOptions {
  setUserInfo: Dispatch<SetStateAction<any>>;
}

export interface WrapperAuthProps {
  userInfo: any;
}
