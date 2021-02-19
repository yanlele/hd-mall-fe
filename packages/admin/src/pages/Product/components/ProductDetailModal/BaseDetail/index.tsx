import React, { FC } from 'react';
import { Col, Divider, Row } from 'antd';
import { ProductBaseProps } from '@src/pages/Product/components/ProductDetailModal/interface';
import { ProductStatus, ProductTag } from '@src/common/enum';
import { toNumber } from 'lodash';

const BaseDetail: FC<ProductBaseProps> = props => {
  const { record } = props;

  return (
    <>
      <Divider>基本信息</Divider>
      <div className="item">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <p>id: {record.id}</p>
          </Col>
          <Col span={8}>
            <p>商品类型id: {record.category_id}</p>
          </Col>

          <Col span={8}>
            <p>库存: {record.inventory}</p>
          </Col>
          <Col span={8}>
            <p>销量：{record.sales}</p>
          </Col>

          <Col span={8}>
            <p>打标类型：{ProductTag[toNumber(record.tag)]}</p>
          </Col>
          <Col span={8}>
            <p>商品状态： {ProductStatus[record.status]}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BaseDetail;
