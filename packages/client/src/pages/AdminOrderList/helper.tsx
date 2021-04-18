import styles from '@src/common/baseProductColumns/style.less';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import CountComponent from '@src/components/dataEntry/CountComponent';
import React from 'react';

export const handleGetColumnsHelper = () => {
  return [
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
      render: () => {
        return (
          <CountComponent
            onChange={value => {
              console.log(value);
            }}
          />
        );
      },
    },
    {
      title: '金额',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: () => {
        return <span>￥2899.00</span>;
      },
    },
  ];
};
