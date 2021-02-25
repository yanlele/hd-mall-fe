import React, { FC } from 'react';
import { Layout, Divider } from 'antd';
import styles from './style.less';

const { Header } = Layout;

const HeaderComponent: FC = () => {
  return (
    <Header className={styles.header}>
      <div className="header-content">
        <div className="left">
          <span>在线商城</span>
          <Divider type="vertical" />
          <a>我的订单</a>
        </div>

        <div className="right">
          <a>注册</a>
          <Divider type="vertical" />
          <a>登录</a>
          <Divider type="vertical" />
          <a>消息通知</a>
          <Divider type="vertical" />
          <a>购物车</a>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;