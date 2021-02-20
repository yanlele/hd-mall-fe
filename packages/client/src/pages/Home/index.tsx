import React, { FC } from 'react';
import styles from './style.less';
import MainCarousel from '@src/pages/Home/MainCarousel';
import CategoryNavigation from '@src/pages/Home/CategoryNavigation';

const Home: FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className="main-navigation">
        <MainCarousel />
        <CategoryNavigation />
      </div>
    </div>
  );
};

export default Home;
