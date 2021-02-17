import React, { FC, useState } from 'react';
import { LoginComponentProps } from '@src/components/HOC/loginWrapper/LoginComponent/interface';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { isEmpty } from 'lodash';

import styles from './style.less';
import { commonFormLayout, commonFormTailLayout } from '@src/common/consts';
import { authUserRequest, getUserInfoRequest } from '@src/pages/User/service';

const LoginComponent: FC<LoginComponentProps> = props => {
  const { setUserInfo, setAuth } = props;

  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      await authUserRequest(values);
      const userInfo = await getUserInfoRequest();

      // 设置用户信息和 auth
      if (!isEmpty(userInfo)) setUserInfo(userInfo);
      setAuth(true);

      message.success('登录成功');
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginComponentContainer}>
      <h2 className="title">登录</h2>
      <hr />
      <Form
        className={styles.formContainer}
        {...commonFormLayout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}>
        <Form.Item label="用户名" name="name" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input allowClear />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password allowClear />
        </Form.Item>

        <Form.Item {...commonFormTailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...commonFormTailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginComponent;
