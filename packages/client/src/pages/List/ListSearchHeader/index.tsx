import React, { FC } from 'react';
import styles from './style.less';

const ListSearchHeader: FC = () => {
  return (
    <div className={styles.listSearchHeaderContainer}>
      <div className="content">ListSearchHeader - 搜索 header</div>
    </div>
  );
};

export default ListSearchHeader;
