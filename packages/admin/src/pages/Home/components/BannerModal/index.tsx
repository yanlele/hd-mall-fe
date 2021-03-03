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
import { bannerModalModelDefaultState } from '@src/pages/Home/model/consts';
import { handleLinkListToFileList } from '@src/components/biz/UploadFileComponent/helper';
import { CreateBannerRequest, updateBannerRequest } from '@src/pages/Home/service';
import produce from 'immer';

const BannerModal: FC = () => {
  const [{ visible, type, item, confirmLoading }, setModalState] = useRecoilState(bannerModalModel);
  const formRef = useRef<FormInstance>();
  const handleCancel = usePersistFn(() => {
    setModalState(bannerModalModelDefaultState);
  });

  const title = useMemo(() => {
    if (type === BannerModalType.add) return '创建';
    if (type === BannerModalType.edit) return '编辑';
    return '';
  }, [type]);

  const handleOnSubmit = usePersistFn(async () => {
    const value = await formRef.current?.validateFields();
    const params: any = {
      type: ImageType.bannerMain,
      file_name: get(value, 'image.0.fileName'),
      url: get(value, 'image.0.url'),
      link: value.link,
    };

    if (type === BannerModalType.edit) params.id = item.id;

    // 提交流程
    setModalState(
      produce(draft => {
        draft.confirmLoading = true;
      }),
    );

    const requestFunction = type === BannerModalType.edit ? updateBannerRequest : CreateBannerRequest;
    await requestFunction(params);
    handleCancel();
  });

  // 初始化值
  const initValues = useMemo(() => {
    if (item.url && type === BannerModalType.edit) {
      return {
        image: handleLinkListToFileList([item.url]),
        link: item.link,
      };
    }
    return undefined;
  }, [item, type]);

  return (
    <Modal
      destroyOnClose
      confirmLoading={confirmLoading}
      onOk={handleOnSubmit}
      okText={type === BannerModalType.edit ? '更新' : '确认'}
      onCancel={handleCancel}
      title={title}
      centered
      visible={visible}
      width={'640px'}>
      <Form
        {...commonFormLayout}
        ref={formRef as Ref<FormInstance> | undefined}
        name="basic"
        initialValues={initValues}>
        <Form.Item label="banner图片" name="image" rules={[{ required: true, message: '请上传banner文件' }]}>
          <UploadFileComponent />
        </Form.Item>

        <Form.Item label="跳转链接" name="link">
          <Input placeholder="请输入跳转链接" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BannerModal;
