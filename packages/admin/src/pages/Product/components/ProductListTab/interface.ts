import { Dispatch, SetStateAction } from 'react';

export interface HandleGetListOptions {
  setProductList: Dispatch<SetStateAction<any[]>>;
  setGetListLoading: Dispatch<SetStateAction<boolean>>;
}
