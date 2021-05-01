import React, { FC, useMemo } from 'react';
import { Layout, Divider } from 'antd';
import styles from './style.less';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { usePersistFn } from 'ahooks';
import { produce } from 'immer';
import UserLoginComponent from '@src/components/biz/UserLoginComponent';
// import { getUserInfoRequest } from '@src/service/consts';

const { Header } = Layout;

const HeaderComponent: FC = () => {
  const [{ userInfo }, setUserState] = useRecoilState(userInfoModel);
  const { user_id, user_name } = userInfo;

  const handleLogin = usePersistFn(() => {
    // getUserInfoRequest().then(res => {
    //   console.log('res', res);
    // });

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

  const handleRenderUser = useMemo(() => {
    if (user_id) {
      return (
        <>
          <a>{user_name}</a>
          <Divider type="vertical" />
          <a>退出登录</a>
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
  }, [user_id]);

  const handleRenderOrder = useMemo(() => {
    return (
      user_id && (
        <>
          <Divider type="vertical" />
          <Link to="/admin/order-list">我的订单</Link>
        </>
      )
    );
  }, [user_id]);

  return (
    <>
      <Header className={styles.header}>
        <div className="header-content">
          <div className="left">
            <span>在线商城</span>
            {handleRenderOrder}
          </div>

          <div className="right">{handleRenderUser}</div>
        </div>
      </Header>

      <UserLoginComponent />
    </>
  );
};

export default HeaderComponent;
