import { Dispatch, SetStateAction } from 'react';

export interface ProductTableListProps {
  productList: any[];
  getListLoading: boolean;
  setProductList: Dispatch<SetStateAction<any[]>>;
  setGetListLoading: Dispatch<SetStateAction<boolean>>;
}
