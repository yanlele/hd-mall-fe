import React, { FC, useMemo } from 'react';
import { ProductCardProps } from '@src/components/biz/ProductCard/interface';
import cn from 'classnames';
import styles from './style.less';

const ProductCard: FC<ProductCardProps> = props => {
  const { hasDiscount = false, className, productItem } = props;

  const { original_cost, price, title, desc, primary_image } = productItem;

  const handleRenderDiscount = useMemo(() => {
    if (hasDiscount) {
      return (
        <>
          <p className="discount-price">¥ {original_cost} 元</p>
          <del className="source-price">¥ {price} 元</del>
        </>
      );
    }

    return <p className="price">¥ {price} 元</p>;
  }, [hasDiscount]);

  return (
    <div className={cn(styles.productCardContainer, className)}>
      <img className="primary-image" src={primary_image} alt="无法显示" />
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
      <div className="price">{handleRenderDiscount}</div>
    </div>
  );
};

export default ProductCard;
