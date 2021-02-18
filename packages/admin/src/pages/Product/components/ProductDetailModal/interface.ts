import { Dispatch, SetStateAction } from 'react';
import { ProductDetail } from '@src/pages/Product/service/interface';

export interface ProductDetailModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  record: ProductDetail;
}

export interface ProductBaseProps {
  record: ProductDetail;
}
