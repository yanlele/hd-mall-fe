import React, { FC, useMemo } from 'react';
import styles from './style.less';
import { Button, Input, message, Spin } from 'antd';
import { range, map, get, isArray, isNil } from 'lodash';
import { usePersistFn } from 'ahooks';
import { useHistory } from 'react-router';
import useMountRequest from '@src/pages/Order/useHooks/useMountRequest';

const { TextArea } = Input;

const OrderInfo: FC = () => {
  const history = useHistory();
  const { data: res, loading } = useMountRequest();
  const data = get(res, 'data');
  const infoList = useMemo(() => {
    if (isNil(data)) return [];
    if (isArray(data)) return data;
    return [data];
  }, [data]);

  const createOrder = usePersistFn(() => {
    message.success('下单成功');
    history.push('/admin/order-detail');
  });

  return (
    <Spin spinning={loading}>
      <div className={styles.orderInfoContainer}>
        <div className="order-info-header">
          <h3>确认商品信息</h3>
        </div>

        <div className="order-info-content">
          {/* 商品信息 */}
          {map(infoList, item => {
            return (
              <div key={item} className="order-info-item">
                <div className="info-content">
                  <img className="order-info-image" src={get(item, 'product_info.primary_image')} alt="" />
                  <div>
                    <span className="content-desc">{get(item, 'product_info.name')}</span>
                    <p className="content-desc">{get(item, 'product_info.desc')}</p>
                  </div>
                </div>
                <div className="price-content">
                  <span className="count">X {get(item, 'count')}</span>
                  <span className="price">$ {get(item, 'product_info.price', 0).toFixed(2)}</span>
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
            <TextArea
              style={{ width: '60%' }}
              rows={6}
              autoSize={{ maxRows: 6, minRows: 6 }}
              placeholder="给商家留言"
            />
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
    </Spin>
  );
};

export default OrderInfo;
