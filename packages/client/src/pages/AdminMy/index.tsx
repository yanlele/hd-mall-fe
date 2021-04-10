import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';

const AdminMy: FC = () => {
  return (
    <AdminContainer>
      <div className={styles.adminMyContainer}>
        <div className="info-content">
          <p>头像</p>
          <p>积分</p>
          <p>优惠券</p>
          <p>快速浏览订单</p>
        </div>
      </div>
    </AdminContainer>
  );
};

export default AdminMy;
