import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';

const AdminMy: FC = () => {
  return (
    <AdminContainer>
      <div className={styles.adminMyContainer}>
        <div className="info-content">12312312</div>
      </div>
    </AdminContainer>
  );
};

export default AdminMy;
