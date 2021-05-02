import React, { FC } from 'react';
import { Menu } from 'antd';
import { map, get } from 'lodash';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import { categoryListModel } from '@src/pages/Home/model';
import { useHistory } from 'react-router';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  const history = useHistory();
  const list = useRecoilValue(categoryListModel);

  const handleClick = (value: any) => {
    const categoryId = get(value, 'key');
    history.push(`/list?id=${categoryId}`);
  };

  return (
    <div className={styles.categoryNavContainer}>
      {/* @ts-ignore */}
      <Menu onClick={handleClick} getPopupContainer={node => node.parentElement}>
        {map(list, item => {
          return (
            <SubMenu onTitleClick={handleClick} key={item.id} title={item.name}>
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
