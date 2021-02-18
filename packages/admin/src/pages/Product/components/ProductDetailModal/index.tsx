import React, { FC } from 'react';
import { ProductDetailModalProps } from '@src/pages/Product/components/ProductDetailModal/interface';
import { Modal } from 'antd';
import styles from './style.less';
import ProductImage from '@src/pages/Product/components/ProductDetailModal/ProductImage';
import BaseDetail from '@src/pages/Product/components/ProductDetailModal/BaseDetail';
import ProductCard from '@src/pages/Product/components/ProductDetailModal/ProductCard';
import ProductParams from '@src/pages/Product/components/ProductDetailModal/ProductParams';

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
      <ProductCard record={record} />

      <BaseDetail record={record} />

      <ProductParams record={record} />

      <ProductImage productId={record.id} />
    </Modal>
  );
};

export default ProductDetailModal;
