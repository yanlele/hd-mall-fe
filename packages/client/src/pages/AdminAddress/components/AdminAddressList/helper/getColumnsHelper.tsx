import { ColumnsType } from 'antd/lib/table/interface';
import React from 'react';
import { Divider } from 'antd';

const getColumnsHelper = (): ColumnsType<any> => {
  return [
    {
      title: '收货人',
      dataIndex: 'addressee_name',
      key: 'addressee_name',
    },
    {
      title: '电话号码',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: '省市区',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: '详情地址',
      dataIndex: 'address_detail',
      key: 'address_detail',
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <div>
            <a>删除</a>
            <Divider type="vertical" />
            <a>修改</a>
          </div>
        );
      },
    },
  ];
};

export default getColumnsHelper;
