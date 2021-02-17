import { Dispatch, SetStateAction } from 'react';

export interface ProductCategoryTreeSelectProps {
  setProductList?: Dispatch<SetStateAction<any[]>>;
  setGetListLoading: Dispatch<SetStateAction<boolean>>;
}
