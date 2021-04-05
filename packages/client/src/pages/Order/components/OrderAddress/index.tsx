import React, { FC } from 'react';
import styles from './style.less';

const OrderAddress: FC = () => {
  return (
    <div className={styles.orderAddressContainer}>
      <h3>收获地址</h3>
      <div className="address-list">
        <div className="address-item">
          <p>
            <span>胡大胖</span>
            <span>修改</span>
          </p>
          <p>15213498872</p>
          <p>重庆市南岸区南山 重庆第二师范学院</p>
        </div>
      </div>
    </div>
  );
};

export default OrderAddress;
