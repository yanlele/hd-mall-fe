import React, { FC, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { map } from 'lodash';
import styles from './style.less';
import { GetCategoryListRequest } from '@src/pages/Home/service';
import { CategoryItem } from '@src/pages/Home/service/interface';

const { SubMenu } = Menu;

const CategoryNavigation: FC = () => {
  const [list, setList] = useState<CategoryItem[]>([]);

  useEffect(() => {
    GetCategoryListRequest().then(res => {
      setList(res.data);
    });
  }, []);

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
