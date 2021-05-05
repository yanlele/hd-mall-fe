import React, { FC, useState } from 'react';
import { message, Modal } from 'antd';
import AddressForm from '@src/components/biz/AddressModal/AddressForm';
import { useRecoilState } from 'recoil';
import { usePersistFn } from 'ahooks';
import { AddressModalProps } from '@src/components/biz/AddressModal/interface';
import { createAddressRequest, updateAddressRequest } from '@src/service';

const AddressModal: FC<AddressModalProps> = props => {
  const { model, defaultModelState, onSubmitCallback } = props;
  const [loading, setLoading] = useState(false);

  const [modalState, setModalState] = useRecoilState(model);
  const { visible, title, actions, type, addressInfo } = modalState;
  const { onSubmit } = actions;

  // 关闭模态框
  const handleCancel = usePersistFn(() => {
    setModalState(defaultModelState);
  });

  // 提交
  const handleSubmit = () => {
    setLoading(true);
    onSubmit().then(async values => {
      try {
        if (type === 'edit') {
          // 更新场景
          await updateAddressRequest({ ...values, id: addressInfo.id });
        } else {
          // 创建场景
          await createAddressRequest(values);
        }
        message.success(`${title}收货地址成功`);
        setLoading(false);
        handleCancel();
        if (onSubmitCallback) onSubmitCallback();
      } catch (e) {
        setLoading(false);
      }
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
      confirmLoading={loading}
      onCancel={handleCancel}>
      <AddressForm model={model} />
    </Modal>
  );
};

export default AddressModal;
