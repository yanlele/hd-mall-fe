import React, { FC, useState } from 'react';
import { isEmpty } from 'lodash';
import styles from './style.less';
import { useGetUserInfo } from '@src/components/HOC/loginWrapper/useHooks';
import LoginComponent from '@src/components/HOC/loginWrapper/LoginComponent';

const loginWrapper = (WrapperComponent: FC) => (props: any) => {
  // 获取用户信息
  const [userInfo, setUserInfo] = useState();

  const { auth } = useGetUserInfo({ setUserInfo });

  if (auth) {
    if (isEmpty(userInfo)) return null;
    return <WrapperComponent {...props} userInfo={userInfo} />;
  }
  return (
    <div className={styles.loginWrapperContainer}>
      <LoginComponent setUserInfo={setUserInfo} />
    </div>
  );
};

export default loginWrapper;
