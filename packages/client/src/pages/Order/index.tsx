import React, { FC } from 'react';
import styles from './style.less';
import HomeHeader from '@src/components/biz/HomeHeader';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';

const Order: FC = () => {
  // 获取主要分类
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.orderPageContainer}>
      <HomeHeader />
    </div>
  );
};

export default Order;
