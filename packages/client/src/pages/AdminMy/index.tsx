import React, { FC } from 'react';
import AdminSubMenu from '@src/components/biz/AdminSubMenu';
import AdminBreadcrumb from '@src/components/biz/AdminBreadcrumb';
import styles from './style.less';

const AdminMy: FC = () => {
  return (
    <div className={styles.adminMyContainer}>
      <AdminBreadcrumb />
      <AdminSubMenu />
    </div>
  );
};

export default AdminMy;
