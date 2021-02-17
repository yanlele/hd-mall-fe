import React, { FC } from 'react';
import { LoginComponentProps } from '@src/components/HOC/loginWrapper/LoginComponent/interface';
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './style.less';
import { commonFormLayout, commonFormTailLayout } from '@src/common/consts';

const LoginComponent: FC<LoginComponentProps> = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div>
      <h3>登录</h3>
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
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginComponent;
