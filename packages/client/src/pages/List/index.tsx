import React, { FC } from 'react';
import styles from './style.less';
import HomeHeader from '@src/pages/Home/HomeHeader';

const List: FC = () => {
  return (
    <div className={styles.listContainer}>
      <HomeHeader />
    </div>
  );
};

export default List;
