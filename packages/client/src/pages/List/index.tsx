import React, { FC } from 'react';
import styles from './style.less';
import { useGetCategoryList, useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { categoryListModel, primaryCategoryListModel } from '@src/pages/Home/model';
import HomeHeader from '@src/components/biz/HomeHeader';
import ListSearchHeader from '@src/pages/List/ListSearchHeader';
import SortType from '@src/pages/List/SortType';
import ProductList from '@src/pages/List/ProductList';
import { useGetProductList } from '@src/pages/List/service/useListServiceHooks';

const List: FC = () => {
  // 获取主要分类
  useGetPrimaryCategoryList(primaryCategoryListModel);

  // 获取所有分类
  useGetCategoryList(categoryListModel);

  // 获取商品列表
  useGetProductList();

  return (
    <div className={styles.listContainer}>
      <HomeHeader />

      <ListSearchHeader />
      <div className="list-content">
        <SortType />
        <ProductList />
      </div>
    </div>
  );
};

export default List;
