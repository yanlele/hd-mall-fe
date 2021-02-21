import React, { FC, useMemo } from 'react';
import { ProductCardProps } from '@src/components/biz/ProductCard/interface';
import cn from 'classnames';
import styles from './style.less';

const ProductCard: FC<ProductCardProps> = props => {
  const { hasDiscount = false, className } = props;

  const handleRenderDiscount = useMemo(() => {
    if (hasDiscount) {
      return (
        <>
          <p className="discount-price">¥ 389 元</p>
          <del className="source-price">¥ 550 元</del>
        </>
      );
    }

    return <p className="price">¥ 389 元</p>;
  }, [hasDiscount]);

  return (
    <div className={cn(styles.productCardContainer, className)}>
      <img
        className="primary-image"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgse.cn.gcimg.net%2F4e4ba00947ad08924ed6d5f9f8d7a98d.jpg&refer=http%3A%2F%2Fimgse.cn.gcimg.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616511718&t=4bd3fd5b7732789d1106a489a8bb651c"
        alt="无法显示"
      />
      <p className="title">超级霸王龙</p>
      <p className="desc">智能遥控正品</p>
      <div className="price">{handleRenderDiscount}</div>
    </div>
  );
};

export default ProductCard;
