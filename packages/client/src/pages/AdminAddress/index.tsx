import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';

const AdminAddress: FC = () => {
  return (
    <AdminContainer>
      <AdminTitleBar>地址管理中心</AdminTitleBar>
    </AdminContainer>
  );
};

export default AdminAddress;
