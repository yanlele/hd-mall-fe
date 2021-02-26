import React, { FC } from 'react';
import styles from './style.less';
import MainCarousel from '@src/pages/Home/MainCarousel';
import CategoryNavigation from '@src/pages/Home/CategoryNavigation';
import { useTitle } from 'ahooks';
import DiscountSwiper from '@src/pages/Home/DiscountSwiper';
import HomeHeader from '@src/pages/Home/HomeHeader';
import PrimaryCategory from '@src/pages/Home/PrimaryCategory';
import { map } from 'lodash';
import { categoryListModel, primaryCategoryListModel } from '@src/pages/Home/model';
import { useGetCategoryList, useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { useRecoilValue } from 'recoil';

const Home: FC = () => {
  useTitle('首页');
  // 获取所有分类
  useGetCategoryList(categoryListModel);

  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  const categoryList = useRecoilValue(primaryCategoryListModel);

  return (
    <div className={styles.homeContainer}>
      <HomeHeader />

      <div className="home-content">
        <div className="main-navigation">
          {/* 轮播图 */}
          <MainCarousel />

          {/* 导航 */}
          <CategoryNavigation />
        </div>

        {/* 限时折扣 */}
        <DiscountSwiper />

        {/* 主要分类商品展示 */}
        {map(categoryList, item => (
          <PrimaryCategory item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
