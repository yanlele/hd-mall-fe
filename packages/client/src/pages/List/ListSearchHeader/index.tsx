import React, { FC } from 'react';
import styles from './style.less';
import ListSearchHeaderNav from '@src/pages/List/ListSearchHeader/ListSearchHeaderNav';

/**
 * 搜索列表页面
 * @constructor
 */
const ListSearchHeader: FC = () => {
  return (
    <div className={styles.listSearchHeaderContainer}>
      <div className="content">
        <ListSearchHeaderNav />
      </div>
    </div>
  );
};

export default ListSearchHeader;
