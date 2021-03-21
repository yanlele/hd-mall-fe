import { ProductItem } from '@src/pages/Home/service/interface';

export interface ProductListModelState {
  list: ProductItem[];
  loading: boolean;
}
