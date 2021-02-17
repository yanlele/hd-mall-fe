import { Dispatch, SetStateAction } from 'react';

export interface UseGetUserInfoOptions {
  setUserInfo: Dispatch<SetStateAction<any>>;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

export interface WrapperAuthProps {
  userInfo: any;
}
