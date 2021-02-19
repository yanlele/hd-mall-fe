import React, { FC, useRef } from 'react';
import { Form, FormInstance, Input, message, Modal } from 'antd';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { get } from 'lodash';
import { categoryListModelSelector, categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { commonFormLayout } from '@src/common/consts';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';
import { CreateCategoryRequestParams } from '@src/pages/Category/service/interface';
import { createCategoryRequest } from '@src/pages/Category/service';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';

const CategoryModal: FC = () => {
  const [{ visible, modalLoading }, setModalState] = useRecoilState(categoryModalVisibleModelSelector);
  const setState = useSetRecoilState(categoryListModelSelector);

  const formRef = useRef<FormInstance>();

  const handleOnOk = async () => {
    const value = await formRef.current?.validateFields();

    // 整理数据
    const params: CreateCategoryRequestParams = {
      name: get(value, 'name', ''),
    };
    if (get(value, 'avatar.0.url', '')) params.avatar = get(value, 'avatar.0.url', '');

    // 创建
    setModalState({ modalLoading: true });
    await createCategoryRequest(params);
    message.success('创建成功');
    setModalState({ visible: false, modalLoading: false });

    // 刷新列表
    await handleGetCategoryListAsyncHelper({ setState });
  };

  return (
    <Modal
      destroyOnClose
      title="创建"
      centered
      visible={visible}
      onOk={handleOnOk}
      width={'640px'}
      confirmLoading={modalLoading}
      onCancel={() => setModalState({ visible: false })}>
      <Form
        // @ts-ignore
        ref={formRef}
        {...commonFormLayout}
        name="basic"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item label="分类名称" name="name" rules={[{ required: true, message: '一定要有分类名称' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="主图" name="avatar">
          <UploadFileComponent />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryModal;
