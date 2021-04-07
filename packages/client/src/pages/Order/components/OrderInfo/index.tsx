import React, { FC } from 'react';
import styles from './style.less';

const OrderInfo: FC = () => {
  return (
    <div className={styles.orderInfoContainer}>
      <div className="order-info-header">
        <h3>确认商品信息</h3>
      </div>
    </div>
  );
};

export default OrderInfo;
