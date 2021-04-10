import React, { FC } from 'react';
import { Modal } from 'antd';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import { useRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { usePersistFn } from 'ahooks';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';

const AddressModal: FC = () => {
  const [modalState, setModalState] = useRecoilState(clientAddressModalModel);
  const { visible, title, actions } = modalState;
  const { onSubmit } = actions;

  // 关闭模态框
  const handleCancel = usePersistFn(() => {
    setModalState(defaultClientAddressModalModelState);
  });

  // 提交
  const handleSubmit = () => {
    onSubmit().then(values => {
      console.log(values);
    });
  };

  return (
    <Modal
      destroyOnClose
      title={`${title}收货地址`}
      centered
      visible={visible}
      onOk={handleSubmit}
      width={'640px'}
      confirmLoading={false}
      onCancel={handleCancel}>
      <AddressForm />
    </Modal>
  );
};

export default AddressModal;
