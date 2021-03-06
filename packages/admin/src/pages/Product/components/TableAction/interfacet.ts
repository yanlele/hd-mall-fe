import { ProductDetail } from '@src/pages/Product/service/interface';
import { Dispatch, SetStateAction } from 'react';

export interface TableActionProps {
  record: ProductDetail;
  setProductList: Dispatch<SetStateAction<any[]>>;
  setGetListLoading: Dispatch<SetStateAction<boolean>>;
}
