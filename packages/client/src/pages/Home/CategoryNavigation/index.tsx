import React, { FC } from 'react';
import { Menu } from 'antd';
import styles from './style.less';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  return (
    <div className={styles.categoryNavContainer}>
      {/* @ts-ignore */}
      <Menu getPopupContainer={node => node.parentElement}>
        <SubMenu title="自动化玩具">
          <Menu.Item>盲盒</Menu.Item>
          <Menu.Item>机器玩具</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default CategoryNavigation;
