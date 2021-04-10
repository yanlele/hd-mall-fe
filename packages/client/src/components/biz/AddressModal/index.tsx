import React, { FC } from 'react';
import { Modal } from 'antd';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import { useRecoilState } from 'recoil';
import { clientAddressModalModel } from '@src/components/biz/AddressModal/model';
import { usePersistFn } from 'ahooks';
import { produce } from 'immer';

const AddressModal: FC = () => {
  const [{ visible, title, actions }, setModalState] = useRecoilState(clientAddressModalModel);
  const { onSubmit } = actions;

  // 关闭模态框
  const handleCancel = usePersistFn(() => {
    setModalState(
      produce(draft => {
        draft.visible = false;
      }),
    );
  });

  return (
    <Modal
      destroyOnClose
      title={title}
      centered
      visible={visible}
      onOk={onSubmit}
      width={'640px'}
      confirmLoading={false}
      onCancel={handleCancel}>
      <AddressForm />
    </Modal>
  );
};

export default AddressModal;
