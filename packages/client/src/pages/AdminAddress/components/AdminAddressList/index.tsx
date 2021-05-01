import React, { FC } from 'react';
import { AdminAddressListProps } from '@src/pages/AdminAddress/components/AdminAddressList/interface';
import { Table } from 'antd';
import getColumnsHelper from '@src/pages/AdminAddress/components/AdminAddressList/helper/getColumnsHelper';

const AdminAddressList: FC<AdminAddressListProps> = () => {
  const columns = getColumnsHelper();

  return <Table pagination={false} columns={columns} />;
};

export default AdminAddressList;
