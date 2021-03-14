import { ProductItem } from '@src/pages/Home/service/interface';

export interface ProductCardProps {
  hasDiscount?: boolean;
  className?: string;
  hasShadow?: boolean; // 是否有 阴影
  productItem: ProductItem;
}
