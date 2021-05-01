import React, { FC } from 'react';
import { Modal } from 'antd';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import { useRecoilState } from 'recoil';
import { usePersistFn } from 'ahooks';
import { AddressModalProps } from '@src/components/biz/AddressModal/interface';

const AddressModal: FC<AddressModalProps> = props => {
  const { model, defaultModelState } = props;

  const [modalState, setModalState] = useRecoilState(model);
  const { visible, title, actions } = modalState;
  const { onSubmit } = actions;

  // 关闭模态框
  const handleCancel = usePersistFn(() => {
    setModalState(defaultModelState);
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
      <AddressForm model={model} />
    </Modal>
  );
};

export default AddressModal;
