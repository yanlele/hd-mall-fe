import React, { FC } from 'react';
import HeaderComponent from '@src/components/biz/HeaderComponent';
import { usePersistFn, useTitle } from 'ahooks';
import loginWrapper from '@src/components/HOC/loginWrapper';
import { useRecoilValue } from 'recoil';
import { userInfoModel } from '@src/common/models/useInfoModel';
import { get } from 'lodash';
import { Button, Col, Form, Row } from 'antd';
import { logoutRequest } from '@src/pages/User/service';

const User: FC = () => {
  useTitle('管理员信息');
  const user = useRecoilValue(userInfoModel);

  const handleLogout = usePersistFn(async () => {
    await logoutRequest();
    window.location.reload();
  });

  console.log(user);

  return (
    <div>
      <HeaderComponent leftChild={<h1>管理员信息</h1>} />
      <hr />
      <Row>
        <Col span={12}>
          <Form.Item label="用户名">{get(user, 'name')}</Form.Item>
        </Col>
      </Row>

      <br />
      <Button onClick={handleLogout}>退出登录</Button>
    </div>
  );
};

export default loginWrapper(User);
