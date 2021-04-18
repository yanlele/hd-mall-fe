import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';

const AdminOrderList: FC = () => {
  return (
    <AdminContainer>
      <AdminTitleBar>订单列表</AdminTitleBar>
    </AdminContainer>
  );
};

export default AdminOrderList;
