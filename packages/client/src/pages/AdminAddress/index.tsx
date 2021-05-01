import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import styles from './style.less';
import { addressFormModel } from '@src/pages/AdminAddress/model/addressFormModel';
import { Button, Row, Col, message } from 'antd';
import { usePersistFn } from 'ahooks';
import { useRecoilValue } from 'recoil';
import AdminAddressList from '@src/pages/AdminAddress/components/AdminAddressList';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';
import AddressModal from '@src/components/biz/AddressModal';

const AdminAddress: FC = () => {
  const { actions } = useRecoilValue(addressFormModel);

  const handleOnSubmit = usePersistFn(() => {
    actions.onSubmit().then(res => {
      console.log('res', res);
      message.success('添加新地址成功');
      handleResetFields();
    });
  });

  const handleResetFields = usePersistFn(() => {
    actions.resetFields();
  });

  return (
    <AdminContainer>
      <AdminTitleBar>地址管理中心</AdminTitleBar>

      <div className={styles.adminAddressContainer}>
        <div className="form-content">
          <h3>添加地址</h3>
          <AddressForm model={addressFormModel} />
          <Row>
            <Col offset={4} className="button-group">
              <Button type="primary" onClick={handleOnSubmit}>
                提交
              </Button>
              <Button onClick={handleResetFields}>清空</Button>
            </Col>
          </Row>
        </div>

        <div className="address-list-info">
          <AdminAddressList />
        </div>
      </div>

      <AddressModal model={clientAddressModalModel} defaultModelState={defaultClientAddressModalModelState} />
    </AdminContainer>
  );
};

export default AdminAddress;
