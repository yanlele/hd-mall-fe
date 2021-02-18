import React, { FC } from 'react';
import { Card, Divider, Image, Space } from 'antd';
import { ProductBaseProps } from '@src/pages/Product/components/ProductDetailModal/interface';

const ProductCard: FC<ProductBaseProps> = props => {
  const { record } = props;
  return (
    <>
      <Divider>卡片</Divider>
      <div className="item">
        <Card style={{ width: 300, margin: '0 auto' }}>
          <Image preview={false} width={249} src={record.primary_image} />
          <p>title: {record.title}</p>
          <p>desc: {record.desc}</p>
          <Space size="middle">
            <del>原价: {record.original_cost}</del>
            <span>现价: {record.price}</span>
          </Space>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
