import React, { FC } from 'react';
import styles from './style.less';

const OrderHeader: FC = () => {
  return (
    <div className={styles.orderHeaderContainer}>
      <div className="header-content">OrderHeader</div>
    </div>
  );
};

export default OrderHeader;
