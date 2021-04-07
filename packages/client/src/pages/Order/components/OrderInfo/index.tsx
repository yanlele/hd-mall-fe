import React, { FC } from 'react';
import styles from './style.less';

const OrderInfo: FC = () => {
  return (
    <div className={styles.orderInfoContainer}>
      <div className="order-info-header">
        <h3>确认商品信息</h3>
      </div>

      <div className="order-info-content">
        <div className="order-info-item">
          <div className="info-content">
            <img
              className="order-info-image"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3101694723,748884042&fm=26&gp=0.jpg"
              alt=""
            />
            <span className="content-desc">
              乐高哈利沙特森美城堡魔法世界男女拼积木益智玩具乐高哈利沙特森美城堡魔法世界男女拼积木益智玩具
            </span>
          </div>
          <div className="price-content">
            <span className="count">X 1</span>
            <span className="price">$ 2889.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
