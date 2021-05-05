import React, { FC, memo } from 'react';
import { Spin, Table } from 'antd';
import { useRequest } from 'ahooks';
import { getDetailListByTempOrderIdRequest } from '@src/service';
import { get } from 'lodash';
import { getColumnsHelper } from '@src/pages/OrderDetail/helper';

const ChildrenTable: FC<{ record: any }> = ({ record }) => {
  const { order_id: orderId } = record;
  const { data: res, loading } = useRequest(() => getDetailListByTempOrderIdRequest(orderId));
  const productList = get(res, 'data', []);

  return (
    <Spin spinning={loading}>
      <Table columns={getColumnsHelper()} dataSource={productList} pagination={false} />
    </Spin>
  );
};

export default memo(ChildrenTable);
