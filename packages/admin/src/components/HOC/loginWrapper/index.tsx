import React, { FC, useState } from 'react';
import { isEmpty } from 'lodash';
import styles from './style.less';
import { useGetUserInfo } from '@src/components/HOC/loginWrapper/useHooks';
import LoginComponent from '@src/components/HOC/loginWrapper/LoginComponent';

const loginWrapper = (WrapperComponent: FC<any>) => (props: any) => {
  // 获取用户信息
  const [userInfo, setUserInfo] = useState();
  const [auth, setAuth] = useState(true);

  // 校验登录
  useGetUserInfo({ setUserInfo, setAuth });

  if (auth) {
    if (isEmpty(userInfo)) return null;
    return <WrapperComponent {...props} userInfo={userInfo} />;
  }
  return (
    <div className={styles.loginWrapperContainer}>
      <LoginComponent setAuth={setAuth} setUserInfo={setUserInfo} />
    </div>
  );
};

export default loginWrapper;
