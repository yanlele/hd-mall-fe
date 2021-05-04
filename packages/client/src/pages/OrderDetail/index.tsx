import React, { FC, useCallback, useMemo } from 'react';
import styles from './style.less';
import { Spin, Steps, Table } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import LabelValue from '@src/components/layout/LabelValue';
import { columns } from '@src/pages/OrderDetail/helper';
import { useTitle } from 'ahooks';
import useMountRequest from '@src/pages/OrderDetail/useHooks/useMountRequest';
import { get } from 'lodash';
import day from 'dayjs';
import useGetQuery from '@src/common/hooks/useGetQuery';

const { Step } = Steps;

const OrderDetail: FC = () => {
  useTitle('个人中心 - 订单详情');

  const { order_id: orderId } = useGetQuery();

  const { loading, stateInfo } = useMountRequest();

  const getTime = useCallback(
    (time: string) => {
      if (time && day(time).valueOf() !== 0) return day(time).format('YYYY-MM-DD hh:mm:ss');
      return '时间待定';
    },
    [
      get(stateInfo, 'orderDetail.created_at'),
      get(stateInfo, 'orderDetail.send_time'),
      get(stateInfo, 'orderDetail.confirm_time'),
      get(stateInfo, 'orderDetail.complete_time'),
    ],
  );

  return (
    <Spin spinning={loading}>
      <div className={styles.orderDetailContainer}>
        <div className="detail-content">
          <div className="detail-step">
            <Steps current={get(stateInfo, 'orderDetail.status', 0) - 1}>
              <Step
                title="确认订单"
                description={getTime(get(stateInfo, 'orderDetail.created_at'))}
                icon={<CheckCircleOutlined className="step-icon" />}
              />
              <Step
                title="卖家发货"
                description={getTime(get(stateInfo, 'orderDetail.send_time'))}
                icon={<CheckCircleOutlined className="step-icon" />}
              />
              <Step
                title="确认收货"
                description={getTime(get(stateInfo, 'orderDetail.confirm_time'))}
                icon={<CheckCircleOutlined className="step-icon" />}
              />
              <Step
                title="订单完成"
                description={getTime(get(stateInfo, 'orderDetail.complete_time'))}
                icon={<CheckCircleOutlined className="step-icon" />}
              />
            </Steps>
          </div>

          <div className="order-info">
            <div className="info">
              <p className="info-header">订单信息</p>
              <div className="info-detail">
                <LabelValue
                  className="info-detail-item"
                  label="收货地址"
                  value={`
                  ${get(stateInfo, 'address.province', '')}
                  ${get(stateInfo, 'address.address_detail', '')}
                  `}
                />

                <LabelValue
                  className="info-detail-item"
                  label="买家留言"
                  value={get(stateInfo, 'orderDetail.remark', '')}
                />

                <LabelValue className="info-detail-item" label="订单编号" value={orderId} />
              </div>
            </div>
            <div className="order-status">
              <LabelValue
                className="order-status-info-item"
                label={
                  <>
                    <CheckCircleOutlined className="step-icon icon" />
                    订单状态
                  </>
                }
                value="已完成"
              />
              <LabelValue label="物流" value="圆通快递" />
              <LabelValue label="运单号" value={`YT127${orderId}`} />
              <LabelValue className="transportation-status" label="运输状态" value="正在运输过程中。" />
            </div>
          </div>

          <div className="detail-table">
            <Table pagination={false} columns={columns} dataSource={[{}]} />
          </div>

          <div className="extend-info">
            <LabelValue label="商品总价: " value="￥258.00" />
            <LabelValue label="运费: " value="￥258.00" />
            <LabelValue label="实际付款: " value={<b>￥258.00</b>} />
          </div>
        </div>
      </div>
    </Spin>
  );
};

export default OrderDetail;
