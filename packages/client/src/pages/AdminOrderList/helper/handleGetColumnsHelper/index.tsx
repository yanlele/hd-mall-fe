import styles from './../../style.less';
import { Link } from 'react-router-dom';
import React from 'react';
import { stringify } from 'query-string';
import day from 'dayjs';
import { toNumber } from 'lodash';
import { orderStatusMenu } from '@src/pages/OrderDetail/consts';

export const handleGetColumnsHelper = ({ handleDelete }: { handleDelete: (id: number) => void }) => {
  return [
    {
      title: '订单号',
      dataIndex: 'order_id',
      key: 'order_id',
      render: (_: any, { id, order_id }: any) => {
        return <Link to={`/admin/order-detail?${stringify({ order_id, id })}`}>{order_id}</Link>;
      },
    },
    // {
    //   title: '商品信息',
    //   dataIndex: 'name',
    //   key: 'name',
    //   width: 350,
    //   render: () => {
    //     return (
    //       <div className={styles.productInfoItem}>
    //         <Image
    //           src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2283764985,3861992003&fm=26&gp=0.jpg"
    //           alt=""
    //         />
    //         <Link to="/detail?id=9" className="desc">
    //           乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (item: string) => {
        return <span>{day(item).format('YYYY-MM-DD HH:mm:ss')}</span>;
      },
    },
    {
      title: '购买数量',
      dataIndex: 'total_count',
      key: 'total_count',
      render: (total_count: number) => <span>X {total_count}</span>,
    },
    {
      title: '实付款',
      dataIndex: 'total_price',
      key: 'total_price',
      render: (total_price: number) => {
        return <span>￥{toNumber(total_price).toFixed(2)}</span>;
      },
    },
    {
      title: '订单状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: number, { order_id, id }: any) => {
        return (
          <div className={styles.info}>
            <p>{orderStatusMenu[status]}</p>
            <p>
              <Link to={`/admin/order-detail?${stringify({ order_id, id })}`}>订单详情</Link>
            </p>
          </div>
        );
      },
    },
    {
      title: '交易操作',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (_: any, row: any) => {
        return (
          <div className={styles.info}>
            <p>
              <a onClick={() => handleDelete(row.id)}>删除</a>
            </p>
            <p>
              <span>申请售后</span>
            </p>
            <p>
              <span>退款</span>
            </p>
          </div>
        );
      },
    },
  ];
};

export default handleGetColumnsHelper;
