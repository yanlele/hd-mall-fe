import React, { FC, memo } from 'react';
import { AdminAddressListProps } from '@src/pages/AdminAddress/components/AdminAddressList/interface';
import { Table } from 'antd';
import getColumnsHelper from '@src/pages/AdminAddress/components/AdminAddressList/helper/getColumnsHelper';

const data: any[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    addressee_name: `yanle 测试数据 ${i}`,
    mobile: 15213497741,
    province: `四川省成都市 no. ${i}`,
    address_detail: `剑南大道天府四街 佳年华时代晶座 第${i}栋`,
  });
}

const AdminAddressList: FC<AdminAddressListProps> = props => {
  const { dataSource } = props;
  const columns = getColumnsHelper();

  return <Table bordered pagination={false} dataSource={dataSource} columns={columns} />;
};

export default memo(AdminAddressList);
