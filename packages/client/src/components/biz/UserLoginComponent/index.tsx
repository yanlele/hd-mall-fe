import React, { FC } from 'react';
import { Modal, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UserLoginComponent: FC = () => {
  const [form] = Form.useForm();

  return (
    <Modal
      destroyOnClose
      title={'登录'}
      centered
      visible={false}
      onOk={() => {
        console.log('ok');
      }}
      width={'640px'}
      confirmLoading={false}
      onCancel={() => {
        console.log('cancel');
      }}>
      <Form form={form} {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserLoginComponent;
