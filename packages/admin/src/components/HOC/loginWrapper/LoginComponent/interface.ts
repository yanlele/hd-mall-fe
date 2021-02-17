import { Dispatch, SetStateAction } from 'react';

export interface LoginComponentProps {
  setUserInfo: Dispatch<SetStateAction<any>>;
  setAuth: Dispatch<SetStateAction<boolean>>;
}
