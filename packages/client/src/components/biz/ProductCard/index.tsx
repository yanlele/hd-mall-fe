import React, { FC, useMemo } from 'react';
import { ProductCardProps } from '@src/components/biz/ProductCard/interface';
import cn from 'classnames';
import styles from './style.less';
import { useHistory } from 'react-router';
import { usePersistFn } from 'ahooks';

const ProductCard: FC<ProductCardProps> = props => {
  const { hasDiscount = false, className, productItem, hasShadow = true } = props;

  const history = useHistory();

  const { original_cost, price, title, desc, primary_image, id } = productItem;

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

  const handlePage2Detail = usePersistFn(() => {
    history.push(`/detail?id=${id}`);
  });

  return (
    <div
      onClick={handlePage2Detail}
      className={cn(styles.productCardContainer, hasShadow && styles.hasHover, className)}>
      <div id="image-container">
        <img className="primary-image" src={primary_image} alt="无法显示" />
      </div>
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
      <div className="price">{handleRenderDiscount}</div>
    </div>
  );
};

export default ProductCard;
