import React from 'react';
import { Button, Image } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import styles from '@src/common/consts/baseProductColumns/style.less';
import { Link } from 'react-router-dom';
import CountComponent from '@src/components/dataEntry/CountComponent';
import { get, toNumber } from 'lodash';

export const columns = (props?: any): ColumnsType<any> => {
  return [
    {
      title: '商品信息',
      dataIndex: 'name',
      key: 'name',
      width: 350,
      render: (_, row) => {
        return (
          <div className={styles.productInfoItem}>
            <Image src={get(row, 'primary_image')} alt="" />
            <Link to={`/detail?id=${get(row, 'product_id')}`} className="desc">
              <p>{get(row, 'name')}</p>
              <p>{get(row, 'desc')}</p>
            </Link>
          </div>
        );
      },
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      render: price => {
        return <span>￥{toNumber(price).toFixed(2)}</span>;
      },
    },
    {
      title: '数量',
      dataIndex: 'count',
      key: 'count',
      render: count => {
        return (
          <CountComponent
            value={count}
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
      render: (_, row) => {
        return <span>￥{(toNumber(get(row, 'price')) * toNumber(get(row, 'count'))).toFixed(2)}</span>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <div>
            <Button size="small" danger>
              删除
            </Button>
          </div>
        );
      },
    },
  ];
};
