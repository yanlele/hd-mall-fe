import React, { FC } from 'react';
import AdminSubMenu from '@src/components/biz/AdminSubMenu';
import AdminBreadcrumb from '@src/components/biz/AdminBreadcrumb';
import styles from './style.less';

const AdminContainer: FC = props => {
  return (
    <div className={styles.AdminContainerContainer}>
      <AdminBreadcrumb />
      <div className={styles.AdminContainerMainContainer}>
        <AdminSubMenu />
        <div className={styles.AdminContainerMainContent}>{props.children}</div>
      </div>
    </div>
  );
};

export default AdminContainer;
