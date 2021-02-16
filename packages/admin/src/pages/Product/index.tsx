import React, { FC, useEffect } from 'react';
import { createProductRequest, getProductListRequest } from '@src/pages/Product/service';

const Product: FC = () => {
  useEffect(() => {
    getProductListRequest({ name: 'yanle' });
    createProductRequest({
      age: 15,
    });
  });

  return (
    <div>
      <h1>商品配置</h1>
      <hr />
    </div>
  );
};

export default Product;
