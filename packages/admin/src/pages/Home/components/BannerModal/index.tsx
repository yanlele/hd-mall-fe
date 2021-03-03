import React, { FC, Ref, useMemo, useRef } from 'react';
import { Form, FormInstance, Input, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { bannerModalModel } from '@src/pages/Home/model';
import { BannerModalType } from '@src/pages/Home/consts';
import { usePersistFn } from 'ahooks';
import { commonFormLayout } from '@src/common/consts';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';
import { ImageType } from '@hd/common/enum';
import { get } from 'lodash';

const BannerModal: FC = () => {
  const [{ visible, type }, setModalState] = useRecoilState(bannerModalModel);
  const formRef = useRef<FormInstance>();
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

  const handleOnSubmit = usePersistFn(async () => {
    const value = await formRef.current?.validateFields();
    const params = {
      type: ImageType.bannerMain,
      file_name: get(value, 'image.0.fileName'),
      url: get(value, 'image.0.url'),
      link: value.link,
    };

    console.log(params);
  });

  return (
    <Modal
      destroyOnClose
      onOk={handleOnSubmit}
      onCancel={handleCancel}
      title={title}
      centered
      visible={visible}
      width={'640px'}>
      <Form
        {...commonFormLayout}
        ref={formRef as Ref<FormInstance> | undefined}
        name="basic"
        initialValues={{ remember: true }}>
        <Form.Item label="banner图片" name="image" rules={[{ required: true, message: '请上传banner文件' }]}>
          <UploadFileComponent />
        </Form.Item>

        <Form.Item label="跳转链接" name="link">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BannerModal;
