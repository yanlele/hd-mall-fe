import React, { FC, useMemo, Suspense } from 'react';
import { Layout, Divider, message, Modal } from 'antd';
import styles from './style.less';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { usePersistFn, useRequest } from 'ahooks';
import { produce } from 'immer';
import UserLoginComponent from '@src/components/biz/UserLoginComponent';
import { getUserInfoRequest, logoutRequest } from '@src/service';
import { get } from 'lodash';

const { Header } = Layout;

const HeaderComponent: FC = () => {
  const [{ userInfo }, setUserState] = useRecoilState(userInfoModel);
  const { name } = userInfo;
  console.log('name: ', name);
  console.log('userInfo', userInfo);

  useRequest(getUserInfoRequest, {
    onSuccess: res => {
      if (res)
        setUserState(
          produce(draft => {
            draft.userInfo = get(res, 'data');
          }),
        );
    },
  });

  const handleLogin = usePersistFn(() => {
    setUserState(
      produce(draft => {
        draft.modalControl.visible = true;
        draft.modalControl.type = 'login';
      }),
    );
  });

  const handleRegister = usePersistFn(() => {
    setUserState(
      produce(draft => {
        draft.modalControl.visible = true;
        draft.modalControl.type = 'register';
      }),
    );
  });

  // 退出登录
  const handleLogout = usePersistFn(() => {
    Modal.confirm({
      title: '确认退出登录?',
      onOk: async () => {
        await logoutRequest();
        message.success('退出登录成功');
        window.location.href = '/';
      },
      okType: 'danger',
    });
  });

  const handleRenderUser = useMemo(() => {
    if (name) {
      return (
        <>
          <Link to="/admin/my">{name}</Link>
          <Divider type="vertical" />
          <a onClick={handleLogout}>退出登录</a>
          <Divider type="vertical" />
          <Link to="/admin/shopping-cart">购物车</Link>
        </>
      );
    }
    return (
      <>
        <a onClick={handleRegister}>注册</a>
        <Divider type="vertical" />
        <a onClick={handleLogin}>登录</a>
      </>
    );
  }, [name]);

  const handleRenderOrder = useMemo(() => {
    return (
      name && (
        <>
          <Divider type="vertical" />
          <Link to="/admin/order-list">我的订单</Link>
        </>
      )
    );
  }, [name]);

  return (
    <Suspense fallback={<></>}>
      <Header className={styles.header}>
        <div className="header-content">
          <div className="left">
            <Link to="/">在线商城</Link>
            {handleRenderOrder}
          </div>

          <div className="right">{handleRenderUser}</div>
        </div>
      </Header>

      <UserLoginComponent />
    </Suspense>
  );
};

export default HeaderComponent;
