import React, { FC } from 'react';
import styles from './style.less';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import HomeHeader from '@src/components/biz/HomeHeader';
import ListSearchHeader from '@src/pages/List/ListSearchHeader';

const List: FC = () => {
  // 获取主要分类
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.listContainer}>
      <HomeHeader />

      <ListSearchHeader />
      <div className="list-content"></div>
    </div>
  );
};

export default List;
