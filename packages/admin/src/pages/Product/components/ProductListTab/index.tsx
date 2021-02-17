import React, { FC, useState } from 'react';
import ProductCategoryTreeSelect from '@src/pages/Product/components/ProductCategoryTreeSelect';
import ProductTableList from '@src/pages/Product/components/ProductTableList';
import { ProductDetail } from '@src/pages/Product/service/interface';

const ProductListTab: FC = () => {
  const [productList, setProductList] = useState<ProductDetail[]>([]);

  return (
    <div>
      <ProductCategoryTreeSelect setProductList={setProductList} />
      <ProductTableList productList={productList} />
    </div>
  );
};

export default ProductListTab;
