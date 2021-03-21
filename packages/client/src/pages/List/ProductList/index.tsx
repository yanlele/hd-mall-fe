import React, { FC } from 'react';
import { map } from 'lodash';
import { Col, Row, Spin } from 'antd';
import ProductCard from '@src/components/biz/ProductCard';
import { useRecoilValue } from 'recoil';
import { productListModel } from '@src/pages/List/model';

const ProductList: FC = () => {
  // todo 需要获取所有产品的接口， 通过id 获取商品情况
  const { list, loading } = useRecoilValue(productListModel);

  return (
    <Spin spinning={loading}>
      <Row gutter={[24, 24]}>
        {map(list, productItem => {
          return (
            <Col key={productItem.id} span="6">
              <ProductCard productItem={productItem} />
            </Col>
          );
        })}
      </Row>
    </Spin>
  );
};

export default ProductList;
