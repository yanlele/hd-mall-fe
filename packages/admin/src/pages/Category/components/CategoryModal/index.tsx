import React, { FC } from 'react';
import { Form, Input, Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { categoryModalVisibleModel } from '@src/pages/Category/models';
import { commonFormLayout } from '@src/common/consts';
import UploadFileComponent from '@src/components/biz/UploadFileComponent';

const CategoryModal: FC = () => {
  const [visible, setVisible] = useRecoilState(categoryModalVisibleModel);

  return (
    <Modal
      destroyOnClose
      title="创建"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      width={'640px'}
      confirmLoading={false}
      onCancel={() => setVisible(false)}>
      <Form
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
