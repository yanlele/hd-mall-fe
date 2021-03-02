import React, { FC } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bannerModalModel } from '@src/pages/Home/model';
import produce from 'immer';

const BannerModal: FC = () => {
  const [{ visible }, setModalState] = useRecoilState(bannerModalModel);
  const handleCancel = () => {
    setModalState(
      produce(draft => {
        draft.visible = false;
      }),
    );
  };

  return (
    <Modal destroyOnClose onCancel={handleCancel} title={'创建'} centered visible={visible} width={'640px'}>
      123123123
    </Modal>
  );
};

export default BannerModal;
