import React, { FC } from 'react';
import { Menu } from 'antd';
import { range, map } from 'lodash';
import styles from './style.less';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  return (
    <div className={styles.categoryNavContainer}>
      {/* @ts-ignore */}
      <Menu getPopupContainer={node => node.parentElement}>
        {map(range(1, 12), item => {
          return (
            <SubMenu title={`自动化玩具 - ${item}`}>
              <Menu.Item>盲盒</Menu.Item>
              <Menu.Item>机器玩具</Menu.Item>
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default CategoryNavigation;
