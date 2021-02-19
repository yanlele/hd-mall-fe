import React, { FC } from 'react';
import styles from './style.less';
import { Button } from 'antd';
import CategoryTable from '@src/pages/Category/components/CategoryTable';
import CategoryModal from '@src/pages/Category/components/CategoryModal';
import { useSetRecoilState } from 'recoil';
import { categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { useTitle } from 'ahooks';

const Category: FC = () => {
  const setVisible = useSetRecoilState(categoryModalVisibleModelSelector);
  useTitle('商品分类管理');

  return (
    <>
      <div>
        <div className={styles.header}>
          <h1>商品分类管理</h1>
          <Button type="primary" onClick={() => setVisible({ visible: true })}>
            创建分类
          </Button>
        </div>
        <hr />
        <CategoryTable />
      </div>
      <CategoryModal />
    </>
  );
};

export default Category;
