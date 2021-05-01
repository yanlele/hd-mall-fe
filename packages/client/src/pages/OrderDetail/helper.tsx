import React from 'react';
import { ColumnsType } from 'antd/lib/table/interface';
import { concat, slice } from 'lodash';
import { baseProductColumns } from '@src/common/consts/baseProductColumns';

export const columns: ColumnsType<any> = concat(
  slice(baseProductColumns, 0, 2),
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
    render: () => <span>1</span>,
  },
  slice(baseProductColumns, 3),
  {
    title: '操作',
    key: 'action',
    render: () => <span>完成</span>,
  },
);
