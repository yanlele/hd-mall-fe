import React, { FC } from 'react';
import styles from './style.less';
import MainCarousel from '@src/pages/Home/MainCarousel';
import CategoryNavigation from '@src/pages/Home/CategoryNavigation';
import { useTitle } from 'ahooks';
import DiscountSwiper from '@src/pages/Home/DiscountSwiper';

const Home: FC = () => {
  useTitle('首页');

  return (
    <div className={styles.homeContainer}>
      <div className="main-navigation">
        <MainCarousel />
        <CategoryNavigation />
      </div>

      <DiscountSwiper />
    </div>
  );
};

export default Home;
