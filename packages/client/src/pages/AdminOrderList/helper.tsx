import styles from './style.less';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { HandleGetColumnsHelperOptions } from '@src/pages/AdminOrderList/interface';

export const handleGetColumnsHelper = (options: HandleGetColumnsHelperOptions) => {
  console.log(options);
  return [
    {
      title: '订单号',
      dataIndex: 'order_id',
      key: 'order_id',
      render: () => <span>136786809865</span>,
    },
    {
      title: '商品信息',
      dataIndex: 'name',
      key: 'name',
      width: 350,
      render: () => {
        return (
          <div className={styles.productInfoItem}>
            <Image
              src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2283764985,3861992003&fm=26&gp=0.jpg"
              alt=""
            />
            <Link to="/detail?id=9" className="desc">
              乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具
            </Link>
          </div>
        );
      },
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: () => {
        return <span>￥2899.00</span>;
      },
    },
    {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
      render: () => <span>X1</span>,
    },
    {
      title: '实付款',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: () => {
        return <span>￥2899.00</span>;
      },
    },
    {
      title: '订单状态',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: () => {
        return (
          <div className={styles.info}>
            <p>
              <a>交易完成</a>
            </p>
            <p>
              <a>订单详情</a>
            </p>
            <p>
              <a>已评价</a>
            </p>
          </div>
        );
      },
    },
    {
      title: '交易操作',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: () => {
        return (
          <div className={styles.info}>
            <p>
              <a>删除</a>
            </p>
            <p>
              <a>申请售后</a>
            </p>
            <p>
              <a>退款</a>
            </p>
          </div>
        );
      },
    },
  ];
};
