import React, { FC } from 'react';
import { Modal } from 'antd';
import { useRecoilValue } from 'recoil';
import { bannerModalModel } from '@src/pages/Home/model';

const BannerModal: FC = () => {
  const { visible } = useRecoilValue(bannerModalModel);

  return (
    <Modal destroyOnClose title={'创建'} centered visible={visible} width={'640px'}>
      123123123
    </Modal>
  );
};

export default BannerModal;
