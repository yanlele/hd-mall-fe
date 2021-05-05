import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import styles from '@src/common/consts/baseProductColumns/style.less';
import { Image } from 'antd';
import { Link } from 'react-router-dom';
import { toNumber } from 'lodash';

export const getColumnsHelper = (): ColumnsType<any> => {
  return [
    {
      title: '商品信息',
      dataIndex: 'name',
      key: 'name',
      width: 350,
      render: (_, row) => {
        return (
          <div className={styles.productInfoItem}>
            <Image src={row.primary_image} alt="" />
            <Link to={`/detail?id=${row.product_id}`} className="desc">
              <p>{row.name}</p>
              <p>{row.desc}</p>
            </Link>
          </div>
        );
      },
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: item => {
        return <span>￥{toNumber(item).toFixed(2)}</span>;
      },
    },
    {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
      render: item => `${item}`,
    },
    {
      title: '金额',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
      render: (_, row) => {
        return <span>￥{toNumber(row.count * row.price).toFixed(2)}</span>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => <span>完成</span>,
    },
  ];
};
