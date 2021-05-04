import React, { FC, useMemo, useState } from 'react';
import styles from './style.less';
import { Button, Input, message, Spin } from 'antd';
import { reduce, map, get } from 'lodash';
import { usePersistFn } from 'ahooks';
import { useHistory } from 'react-router';
import useMountRequest from '@src/pages/Order/useHooks/useMountRequest';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { orderCreateRequest } from '@src/service';
import { stringify } from 'query-string';

const { TextArea } = Input;

const OrderInfo: FC = () => {
  const query = useGetQuery();
  const history = useHistory();
  const { data: res, loading } = useMountRequest();
  const [remark, setRemark] = useState('');

  const data = get(res, 'data', []);
  const infoList = useMemo(() => data, [data]);

  const createOrder = usePersistFn(async () => {
    const params = {
      order_id: parseInt(get(query, 'temp_order_id', 0), 10),
      remark,
      total_count: totalCount,
      total_price: totalPrice,
    };

    const res = await orderCreateRequest(params);
    const queryString = stringify(get(res, 'data', {}));

    message.success('下单成功');
    history.push(`/admin/order-detail?${queryString}`);
  });

  const totalPrice = useMemo(() => {
    const priceList = map(infoList, item => {
      return get(item, 'count', 0) * get(item, 'price', 0);
    });

    return reduce(priceList, (pre, current) => {
      return pre + current;
    });
  }, [infoList]) as number;

  const totalCount = useMemo(() => {
    const countList = map(infoList, item => get(item, 'count', 0));
    return reduce(countList, (pre, current) => pre + current);
  }, [infoList]) as number;

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
                  <img className="order-info-image" src={get(item, 'primary_image')} alt="" />
                  <div>
                    <span className="content-desc">{get(item, 'name')}</span>
                    <p className="content-desc">{get(item, 'desc')}</p>
                  </div>
                </div>
                <div className="price-content">
                  <span className="count">X {get(item, 'count')}</span>
                  <span className="price">$ {get(item, 'price', 0).toFixed(2)}</span>
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
              value={remark}
              onChange={e => setRemark(e.target.value)}
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
            <span className="value">￥{totalPrice && totalPrice.toFixed(2)}</span>
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
            <span className="value price">￥{totalPrice && totalPrice.toFixed(2)}</span>
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
