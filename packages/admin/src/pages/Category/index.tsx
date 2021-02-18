import React, { FC } from 'react';
import styles from './style.less';
import { Button } from 'antd';
import CategoryTable from '@src/pages/Category/components/CategoryTable';

const Category: FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>商品分类管理</h1>
        <Button type="primary">创建分类</Button>
      </div>
      <hr />
      <CategoryTable />
    </div>
  );
};

export default Category;
