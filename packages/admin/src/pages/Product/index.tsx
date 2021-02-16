import React, { FC, useEffect } from 'react';
import { createProductRequest, getProductListRequest } from '@src/pages/Product/service';
import { ProductProps } from '@src/pages/Product/interface';
import { useTitleSet } from '@src/common/useHooks';

const Product: FC<ProductProps> = props => {
  useEffect(() => {
    getProductListRequest({ name: 'yanle' });
    createProductRequest({
      age: 15,
    });
  });

  useTitleSet('商品配置', props);

  return (
    <div>
      <h1>商品配置</h1>
      <hr />
    </div>
  );
};

export default Product;
