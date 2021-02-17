import React, { FC, useState } from 'react';
import ProductCategoryTreeSelect from '@src/pages/Product/components/ProductCategoryTreeSelect';
import ProductTableList from '@src/pages/Product/components/ProductTableList';
import { ProductDetail } from '@src/pages/Product/service/interface';

const ProductListTab: FC = () => {
  const [productList, setProductList] = useState<ProductDetail[]>([]);
  const [getListLoading, setGetListLoading] = useState(false);

  return (
    <div>
      <ProductCategoryTreeSelect setGetListLoading={setGetListLoading} setProductList={setProductList} />
      <ProductTableList
        setGetListLoading={setGetListLoading}
        setProductList={setProductList}
        getListLoading={getListLoading}
        productList={productList}
      />
    </div>
  );
};

export default ProductListTab;
