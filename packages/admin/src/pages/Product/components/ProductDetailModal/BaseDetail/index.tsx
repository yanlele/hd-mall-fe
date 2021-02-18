import React, { FC } from 'react';
import { Col, Divider, Row } from 'antd';
import { ProductBaseProps } from '@src/pages/Product/components/ProductDetailModal/interface';

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
            <p>打标类型：{record.tag}</p>
          </Col>
          <Col span={8}>
            <p>商品现在的状态： {record.status}</p>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BaseDetail;
