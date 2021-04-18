import React, { FC } from 'react';
import styles from './style.less';
import { Button, Input, message } from 'antd';
import { range, map } from 'lodash';
import { usePersistFn } from 'ahooks';
import { useHistory } from 'react-router';

const { TextArea } = Input;

const OrderInfo: FC = () => {
  const history = useHistory();

  const createOrder = usePersistFn(() => {
    message.success('下单成功');
    history.push('/admin/order-detail');
  });

  return (
    <div className={styles.orderInfoContainer}>
      <div className="order-info-header">
        <h3>确认商品信息</h3>
      </div>

      <div className="order-info-content">
        {/* 商品信息 */}
        {map(range(2), item => {
          return (
            <div key={item} className="order-info-item">
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
          );
        })}

        {/* 配送方式 */}
        <div className="distribution">
          <span className="label">配送方式：</span>
          <span className="value">普通配送 快递包邮</span>
        </div>
        {/* 发票 */}
        <div className="invoice">
          <span className="label">发票信息：</span>
          <div className="value content">
            <p className="line-one">注：如果商品由第三方卖家销售，发票内容由其卖家决定，发票由卖家开具并寄出</p>
            <p>电子普通发票 个人</p>
          </div>
        </div>
        {/* 留言 */}
        <div className="remark">
          <span className="label">留言：</span>
          <TextArea style={{ width: '60%' }} rows={6} autoSize={{ maxRows: 6, minRows: 6 }} placeholder="给商家留言" />
        </div>
      </div>

      {/* 支付信息 */}
      <div className="pay-info">
        <p className="text">
          <span className="label">商品总金额：</span>
          <span className="value">￥2899.00</span>
        </p>

        <p className="text">
          <span className="label">运费：</span>
          <span className="value">￥0</span>
        </p>

        <p className="text">
          <span className="label">优惠金额：</span>
          <span className="value">￥0</span>
        </p>

        <p className="text">
          <span className="label">应付金额：</span>
          <span className="value price">￥2899.00</span>
        </p>

        <Button onClick={createOrder} className="confirm-order-button">
          立即下单
        </Button>
      </div>
    </div>
  );
};

export default OrderInfo;
