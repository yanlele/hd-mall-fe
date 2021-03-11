import React, { FC } from 'react';
import styles from './style.less';
import ListSearchHeaderNav from '@src/pages/List/ListSearchHeader/ListSearchHeaderNav';
import Classify from '@src/pages/List/ListSearchHeader/Classify';
import SearchType from '@src/pages/List/ListSearchHeader/SearchType';

/**
 * 搜索列表页面
 * @constructor
 */
const ListSearchHeader: FC = () => {
  return (
    <div className={styles.listSearchHeaderContainer}>
      <div className="content">
        <ListSearchHeaderNav />
        <Classify />
        <SearchType />
      </div>
    </div>
  );
};

export default ListSearchHeader;
