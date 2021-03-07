import React, { FC } from 'react';
import styles from './style.less';
import HomeHeader from '@src/pages/Home/HomeHeader';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';

const List: FC = () => {
  // 获取主要分类
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.listContainer}>
      <HomeHeader />
    </div>
  );
};

export default List;
