import { Space, Image } from 'antd';
import React from 'react';

export const columns = [
  {
    title: '主图',
    dataIndex: 'primary_image',
    key: 'primary_image',
    render: (text: any) => {
      return <Image width={200} src={text} />;
    },
  },
  {
    title: '商品分类Id',
    dataIndex: 'category_id',
    key: 'category_id',
  },
  {
    title: '商品名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '商品title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '实际销售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '原价',
    dataIndex: 'original_cost',
    key: 'original_cost',
  },
  {
    title: '库存',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: '已销售数量',
    dataIndex: 'sales',
    key: 'sales',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: string, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
