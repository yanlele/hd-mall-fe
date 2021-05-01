import React, { FC, useMemo } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { usePersistFn } from 'ahooks';
import { produce } from 'immer';
import { defaultUserInfoModelState } from '@src/components/biz/UserLoginComponent/model/consts';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const UserLoginComponent: FC = () => {
  const [{ modalControl }, setState] = useRecoilState(userInfoModel);
  const { visible, type } = modalControl;
  const [form] = Form.useForm();

  const useTitle = useMemo(() => (type === 'login' ? '登录' : '注册'), [type]);

  const handleOnSubmit = usePersistFn(() => {
    const { validateFields } = form;
    validateFields().then(res => {
      console.log(res);
      message.success(`${useTitle}成功`);
      handleOnChancel();
    });
  });

  const handleOnChancel = usePersistFn(() => {
    setState(
      produce(draft => {
        draft.modalControl = defaultUserInfoModelState.modalControl;
      }),
    );
  });

  return (
    <Modal
      destroyOnClose
      title={useTitle}
      centered
      visible={visible}
      onOk={handleOnSubmit}
      width={'640px'}
      confirmLoading={false}
      onCancel={handleOnChancel}>
      <Form form={form} {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item label="用户名" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="密码" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserLoginComponent;
