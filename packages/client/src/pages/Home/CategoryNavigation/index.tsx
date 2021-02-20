import React, { FC } from 'react';
import { Menu } from 'antd';
import styles from './style.less';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  return (
    <div className={styles.categoryNavContainer}>
      <Menu getPopupContainer={node => node.parentElement}>
        <SubMenu title="sub menu">
          <Menu.Item>3rd menu item</Menu.Item>
          <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default CategoryNavigation;
