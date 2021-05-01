import React from 'react';
import { Button } from 'antd';
import { ColumnsType } from 'antd/lib/table/interface';
import { concat } from 'lodash';
import { baseProductColumns } from '@src/common/consts/baseProductColumns';

export const columns: ColumnsType<any> = concat(baseProductColumns, {
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
});
