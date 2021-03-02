import React, { FC, useMemo } from 'react';
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bannerModalModel } from '@src/pages/Home/model';
import { BannerModalType } from '@src/pages/Home/consts';
import { usePersistFn } from 'ahooks';

const BannerModal: FC = () => {
  const [{ visible, type }, setModalState] = useRecoilState(bannerModalModel);
  const handleCancel = usePersistFn(() => {
    setModalState({
      visible: false,
      type: BannerModalType.unknown,
    });
  });

  const title = useMemo(() => {
    if (type === BannerModalType.add) return '创建';
    if (type === BannerModalType.edit) return '编辑';
    return '';
  }, [type]);

  return (
    <Modal destroyOnClose onCancel={handleCancel} title={title} centered visible={visible} width={'640px'}>
      123123123
    </Modal>
  );
};

export default BannerModal;
