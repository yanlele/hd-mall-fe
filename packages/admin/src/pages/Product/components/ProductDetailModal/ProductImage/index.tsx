import React, { FC, useEffect } from 'react';
import { Divider } from 'antd';
import { useGetStaticImages } from '@src/pages/Product/components/ProductDetailModal/ProductImage/useHooks';
import { ProductImageProps } from '@src/pages/Product/components/ProductDetailModal/ProductImage/interface';

const ProductImage: FC<ProductImageProps> = props => {
  const { productId } = props;
  const list = useGetStaticImages(productId);

  console.log('list', list);

  return (
    <div>
      <Divider>商品图片</Divider>
    </div>
  );
};

export default ProductImage;
