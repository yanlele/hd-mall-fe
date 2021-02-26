import React, { FC } from 'react';
import styles from './style.less';
import MainCarousel from '@src/pages/Home/MainCarousel';
import CategoryNavigation from '@src/pages/Home/CategoryNavigation';
import { useTitle } from 'ahooks';
import DiscountSwiper from '@src/pages/Home/DiscountSwiper';
import HomeHeader from '@src/pages/Home/HomeHeader';
import PrimaryCategory from '@src/pages/Home/PrimaryCategory';
import { map, range } from 'lodash';
import { categoryListModel, primaryCategoryListModel } from '@src/pages/Home/model';
import { useGetCategoryList, useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';

const Home: FC = () => {
  useTitle('首页');
  // 获取所有分类
  useGetCategoryList(categoryListModel);

  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.homeContainer}>
      <HomeHeader />

      <div className="home-content">
        <div className="main-navigation">
          <MainCarousel />
          <CategoryNavigation />
        </div>

        <DiscountSwiper />

        {map(range(1, 6), item => (
          <PrimaryCategory key={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
