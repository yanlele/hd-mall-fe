import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import styles from './style.less';
import { addressFormModel } from '@src/pages/AdminAddress/model/addressFormModel';
import { Button, Row, Col, message, Spin, Modal } from 'antd';
import { usePersistFn, useRequest } from 'ahooks';
import { useRecoilValue } from 'recoil';
import AdminAddressList from '@src/pages/AdminAddress/components/AdminAddressList';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';
import AddressModal from '@src/components/biz/AddressModal';
import { createAddressRequest, deleteAddressRequest, getAddressListRequest } from '@src/service';
import { get } from 'lodash';

const AdminAddress: FC = () => {
  const { actions } = useRecoilValue(addressFormModel);

  const { data: res, loading, refresh } = useRequest(getAddressListRequest);
  const addressList = get(res, 'data', []);

  const handleOnSubmit = usePersistFn(() => {
    actions.onSubmit().then(async res => {
      handleResetFields();
      await createAddressRequest(res);
      message.success('添加新地址成功');
      refresh();
    });
  });

  const handleDelete = usePersistFn(id => {
    Modal.confirm({
      title: '确认删除该收货地址？',
      onOk: async () => {
        await deleteAddressRequest(id);
        await refresh();
        message.success('删除地址成功');
      },
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
          <Spin spinning={loading}>
            <AdminAddressList handleDelete={handleDelete} dataSource={addressList} />
          </Spin>
        </div>
      </div>

      <AddressModal
        onSubmitCallback={refresh}
        model={clientAddressModalModel}
        defaultModelState={defaultClientAddressModalModelState}
      />
    </AdminContainer>
  );
};

export default AdminAddress;
