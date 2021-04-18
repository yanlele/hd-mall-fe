import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import styles from './style.less';

const AdminAddress: FC = () => {
  return (
    <AdminContainer>
      <AdminTitleBar>地址管理中心</AdminTitleBar>

      <div className={styles.adminAddressContainer}>
        <div className="form-content">
          <AddressForm model={clientAddressModalModel} />
        </div>
      </div>
    </AdminContainer>
  );
};

export default AdminAddress;
