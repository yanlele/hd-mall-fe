import React, { FC } from 'react';
import { Menu } from 'antd';
import { map } from 'lodash';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import { categoryListModel } from '@src/pages/Home/model';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  const list = useRecoilValue(categoryListModel);

  return (
    <div className={styles.categoryNavContainer}>
      {/* @ts-ignore */}
      <Menu getPopupContainer={node => node.parentElement}>
        {map(list, item => {
          return (
            <SubMenu key={item.id} title={item.name}>
              {map(item.children, child => (
                <Menu.Item key={child.id}>{child.name}</Menu.Item>
              ))}
            </SubMenu>
          );
        })}
      </Menu>
    </div>
  );
};

export default CategoryNavigation;
