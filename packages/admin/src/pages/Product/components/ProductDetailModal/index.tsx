import React, { FC } from 'react';
import { ProductDetailModalProps } from '@src/pages/Product/components/ProductDetailModal/interface';
import { Modal, Image, Card, Space, Row, Col } from 'antd';
import styles from './style.less';

const ProductDetailModal: FC<ProductDetailModalProps> = props => {
  const { visible, setVisible, record } = props;

  return (
    <Modal
      className={styles.productDetailModalContainer}
      title="Modal 1000px width"
      centered
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      width="100%">
      <Card style={{ width: 300, margin: '0 auto' }}>
        <Image preview={false} width={249} src={record.primary_image} />
        <p>title: {record.title}</p>
        <p>desc: {record.desc}</p>
        <Space size="middle">
          <del>原价: {record.original_cost}</del>
          <span>现价: {record.price}</span>
        </Space>
      </Card>

      <h3>基本信息</h3>
      <div>
        <Row gutter={[16, 16]}>
          <Col span={12}>123</Col>
          <Col span={12}>123</Col>

          <Col span={12}>123</Col>
          <Col span={12}>123</Col>

          <Col span={12}>123</Col>
          <Col span={12}>123</Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ProductDetailModal;
