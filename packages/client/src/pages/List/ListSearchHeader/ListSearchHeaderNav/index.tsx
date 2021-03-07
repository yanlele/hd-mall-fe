import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.less';

const ListSearchHeaderNav: FC = () => {
  return (
    <Breadcrumb className={styles.listSearchHeaderNavContainer}>
      <Breadcrumb.Item>
        <Link to="/">首页</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>列表</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default ListSearchHeaderNav;
