import React from 'react';
import { Button, Image } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import CountComponent from '@src/components/dataEntry/CountComponent';

export const columns: ColumnsType<any> = [
  {
    title: '商品信息',
    dataIndex: 'name',
    key: 'name',
    width: 350,
    render: () => {
      return (
        <div className="product-info-item">
          <Image
            src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2283764985,3861992003&fm=26&gp=0.jpg"
            alt=""
          />
          <p className="desc">
            乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具乐高哈利沙特森美城堡魔法世界男 女孩拼积木益智玩具
          </p>
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
