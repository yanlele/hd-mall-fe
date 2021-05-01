import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import styles from './style.less';
import { addressFormModel } from '@src/pages/AdminAddress/model/addressFormModel';
import { Button, Row, Col, message } from 'antd';
import { usePersistFn } from 'ahooks';
import { useRecoilValue } from 'recoil';

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
      </div>
    </AdminContainer>
  );
};

export default AdminAddress;
