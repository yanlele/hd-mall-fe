import React, { FC } from 'react';
import { ProductDetailModalProps } from '@src/pages/Product/components/ProductDetailModal/interface';
import { Modal, Image, Card, Space, Row, Col, Divider } from 'antd';
import styles from './style.less';

const ProductDetailModal: FC<ProductDetailModalProps> = props => {
  const { visible, setVisible, record } = props;

  return (
    <Modal
      destroyOnClose
      className={styles.productDetailModalContainer}
      title={record.name}
      centered
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
      width="100%">
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
    </Modal>
  );
};

export default ProductDetailModal;
