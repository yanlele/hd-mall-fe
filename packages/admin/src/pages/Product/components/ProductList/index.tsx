import React, { FC, useState } from 'react';
import ProductCategoryTreeSelect from '@src/pages/Product/components/ProductCategoryTreeSelect';
import ProductTableList from '@src/pages/Product/components/ProductTableList';

const ProductList: FC = () => {
  const [productList, setProductList] = useState<any[]>([]);

  return (
    <div>
      <ProductCategoryTreeSelect setProductList={setProductList} />
      <ProductTableList productList={productList} />
    </div>
  );
};

export default ProductList;
