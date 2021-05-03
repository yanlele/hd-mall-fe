import React, { FC } from 'react';
import styles from './style.less';
import { Steps, Table } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import LabelValue from '@src/components/layout/LabelValue';
import { columns } from '@src/pages/OrderDetail/helper';
import { useTitle } from 'ahooks';

const { Step } = Steps;

const OrderDetail: FC = () => {
  useTitle('个人中心 - 订单详情');

  return (
    <div className={styles.orderDetailContainer}>
      <div className="detail-content">
        <div className="detail-step">
          <Steps current={2}>
            <Step
              title="确认订单"
              description={'2021-04-18 12:12:12'}
              icon={<CheckCircleOutlined className="step-icon" />}
            />
            <Step
              title="卖家发货"
              description={'YYYY-MM-DD hh:mm:ss'}
              icon={<CheckCircleOutlined className="step-icon" />}
            />
            <Step
              title="确认收货"
              description={'YYYY-MM-DD hh:mm:ss'}
              icon={<CheckCircleOutlined className="step-icon" />}
            />
            <Step
              title="订单完成"
              description={'YYYY-MM-DD hh:mm:ss'}
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
                value="胡大胖，13271945724，重庆市南岸区南山重庆第二师范学院"
              />

              <LabelValue className="info-detail-item" label="买家留言" value="无" />

              <LabelValue className="info-detail-item" label="订单编号" value="145671234765" />
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
            <LabelValue label="运单号" value="YT1278456436634" />
            <LabelValue className="transportation-status" label="运输状态" value="您已经在重庆第二师范菜鸟驿站取出。" />
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
  );
};

export default OrderDetail;
