import { ColumnsType } from 'antd/lib/table/interface';
import React from 'react';

const getColumnsHelper = (): ColumnsType<any> => {
  return [
    {
      title: '收货人',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '电话号码',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '省市区',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '详情地址',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <>
            <p>
              <a>删除</a>
            </p>
            <p>
              <a>修改</a>
            </p>
          </>
        );
      },
    },
  ];
};

export default getColumnsHelper;
