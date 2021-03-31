import React, { FC } from 'react';
import styles from './style.less';

const ProductInfo: FC = () => {
  return (
    <div className={styles.productInfoContainer}>
      <h2 className="title">乐高什么仙女玩具外级逆回购傻逼大傻子</h2>
      <p className="desc-info">品质好物 优先选购</p>

      <div className="price-content">
        <p className="line">
          <span className="label">原价</span>
          <span className="price">
            <del>￥880.00</del>
          </span>
        </p>

        <p className="line">
          <span className="label">价格</span>
          <span className="price">￥580.00</span>
        </p>

        <p className="line">
          <span className="label">促销</span>
          <span className="discount-icon">赠送积分</span>
          <span className="desc">购买即赠送商城积分，积分可以抵现</span>
        </p>
      </div>

      <p className="distribution">
        <span>配送</span>
        <span>快递满99免邮费</span>
        <span>付款后72小时内发货</span>
      </p>
    </div>
  );
};

export default ProductInfo;
