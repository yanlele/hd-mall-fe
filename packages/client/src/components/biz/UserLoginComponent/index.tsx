import React, { FC, useMemo } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { useRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { usePersistFn } from 'ahooks';
import { produce } from 'immer';
import { defaultUserInfoModelState } from '@src/components/biz/UserLoginComponent/model/consts';
import { getUserInfoRequest, loginRequest } from '@src/service';
import { get } from 'lodash';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};

const UserLoginComponent: FC = () => {
  const [{ modalControl }, setState] = useRecoilState(userInfoModel);
  const { visible, type, loading } = modalControl;
  const [form] = Form.useForm();
  const { resetFields } = form;

  const useTitle = useMemo(() => (type === 'login' ? '登录' : '注册'), [type]);

  const handleOnSubmit = usePersistFn(() => {
    const { validateFields } = form;
    validateFields().then(async res => {
      try {
        setState(
          produce(draft => {
            draft.modalControl.loading = true;
          }),
        );
        await loginRequest(res);
        const userResponse = getUserInfoRequest();
        setState(
          produce(draft => {
            draft.userInfo = get(userResponse, 'data', {});
            draft.modalControl.loading = false;
          }),
        );
        message.success('登录成功');
        handleOnChancel();
      } catch (e) {
        message.error('登录失败, 请检测用户名和密码的正确性');
        setState(
          produce(draft => {
            draft.modalControl.loading = false;
          }),
        );
      }
    });
  });

  const handleOnChancel = usePersistFn(() => {
    resetFields();
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
      confirmLoading={loading}
      onCancel={handleOnChancel}>
      <Form form={form} {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item label="用户名" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserLoginComponent;
