import { ProductItem } from '@src/pages/Home/service/interface';

export interface ProductCardProps {
  hasDiscount?: boolean;
  className?: string;
  productItem: ProductItem;
}
