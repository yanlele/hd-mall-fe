import React, { FC } from 'react';
import styles from './style.less';
import { Steps } from 'antd';

const { Step } = Steps;

/**
 * order header
 * @constructor
 */
const OrderHeader: FC = () => {
  return (
    <div className={styles.orderHeaderContainer}>
      <div className="header-content">
        <h2>确认订单</h2>
        <Steps className="steps" progressDot current={0}>
          <Step title="填写核对订单" />
          <Step title="成功提交订单" />
        </Steps>
      </div>
    </div>
  );
};

export default OrderHeader;
