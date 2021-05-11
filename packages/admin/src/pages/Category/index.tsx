import React, { FC } from 'react';
import { Button } from 'antd';
import CategoryTable from '@src/pages/Category/components/CategoryTable';
import CategoryModal from '@src/pages/Category/components/CategoryModal';
import { useSetRecoilState } from 'recoil';
import { categoryModalVisibleModelSelector } from '@src/pages/Category/models';
import { useTitle } from 'ahooks';
import HeaderComponent from '@src/components/biz/HeaderComponent';
import loginWrapper from '@src/components/HOC/loginWrapper';

const Category: FC = () => {
  const setVisible = useSetRecoilState(categoryModalVisibleModelSelector);
  useTitle('商品分类管理');

  return (
    <>
      <div>
        <HeaderComponent
          leftChild={<h1>商品分类管理</h1>}
          rightChild={
            <Button type="primary" onClick={() => setVisible({ visible: true })}>
              创建分类
            </Button>
          }
        />

        <hr />
        <CategoryTable />
      </div>
      <CategoryModal />
    </>
  );
};

export default loginWrapper(Category);
