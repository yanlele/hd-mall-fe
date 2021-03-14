import React, { FC } from 'react';
import { map, flatMap } from 'lodash';
import { Col, Row } from 'antd';
import ProductCard from '@src/components/biz/ProductCard';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { useRecoilValue } from 'recoil';

const ProductList: FC = () => {
  // todo 需要获取所有产品的接口， 通过id 获取商品情况
  const categoryList = useRecoilValue(primaryCategoryListModel);

  const allList = flatMap(map(categoryList, item => item.product_list));

  return (
    <div>
      <Row gutter={[24, 24]}>
        {map(allList, productItem => {
          return (
            <Col key={productItem.id} span="6">
              <ProductCard productItem={productItem} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductList;
