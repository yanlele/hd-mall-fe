import React, { FC, useEffect } from 'react';
import styles from './style.less';
import MainCarousel from '@src/pages/Home/MainCarousel';
import CategoryNavigation from '@src/pages/Home/CategoryNavigation';
import { useTitle } from 'ahooks';
import DiscountSwiper from '@src/pages/Home/DiscountSwiper';
import HomeHeader from '@src/pages/Home/HomeHeader';
import PrimaryCategory from '@src/pages/Home/PrimaryCategory';
import { map, range } from 'lodash';
import { GetCategoryListRequest } from '@src/pages/Home/service';
import { useSetRecoilState } from 'recoil';
import { categoryListModel } from '@src/pages/Home/model';

const Home: FC = () => {
  useTitle('首页');
  const setCategoryList = useSetRecoilState(categoryListModel);

  useEffect(() => {
    GetCategoryListRequest().then(res => {
      setCategoryList(res.data);
    });
  }, []);

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
