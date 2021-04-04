import React, { FC, useState } from 'react';
import styles from './style.less';
import { map, range } from 'lodash';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ProductInfo: FC = () => {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);

  return (
    <div className={styles.productInfoContainer}>
      <h2 className="title">乐高什么仙女玩具外级逆回购傻逼大傻子</h2>
      <p className="desc-info">品质好物 优先选购</p>

      {/* 价格板块 */}
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

      {/* 描述信息板块 */}
      <p className="distribution">
        <span>配送</span>
        <span>快递满99免邮费</span>
        <span>付款后72小时内发货</span>
      </p>

      {/* 销量和评价板块 */}
      <div className="product-information">
        <p className="info">
          月销量
          <span className="price"> 100+</span>
        </p>
        <span className="split" />
        <p className="info">
          累计评价
          <span className="price"> 589</span>
        </p>
      </div>

      {/* 商品销售分类 */}
      <div className="sell-category">
        <span className="label">选择分类</span>
        <div className="category-container">
          {map(range(0, 5), item => {
            return (
              <div key={item} className="category-item">
                <img
                  width={30}
                  height={30}
                  src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg005.hc360.cn%2Fk3%2FM07%2FCB%2F59%2FwKhQv1kzXJiEUy2UAAAAADXkdGU281.jpg&refer=http%3A%2F%2Fimg005.hc360.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620111747&t=fb38179c7942e698fc740b45d4b1c35e"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 商品数量 */}
      <div className="sell-count">
        <span className="label">数量</span>
        <div className="input-number-container">
          <input type="number" max={99} value={purchaseQuantity} min={1} className="input-number" />
          <div className="input-number-buttons">
            <span className="add" onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}>
              +
            </span>
            <span
              className="subtract"
              onClick={() => {
                if (purchaseQuantity > 1) {
                  setPurchaseQuantity(purchaseQuantity - 1);
                }
              }}>
              -
            </span>
          </div>
        </div>

        <span className="inventory">库存1000件</span>
      </div>

      {/* handle - 操作 */}
      <div className="handle">
        <Button className="buy">立即购买</Button>
        <Button className="add-car">
          <ShoppingCartOutlined style={{ fontSize: 18, verticalAlign: 'sub' }} /> 加入购物车
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
