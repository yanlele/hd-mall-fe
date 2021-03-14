import React, { FC } from 'react';
import styles from './style.less';
import { Divider } from 'antd';

const SortType: FC = () => {
  return (
    <div className={styles.sortTypeContainer}>
      <a className="item">Link</a>
      <Divider type="vertical" />
      <a className="item">Link</a>
      <Divider type="vertical" />
      <a className="item">Link</a>
      <Divider type="vertical" />
      <a className="item">Link</a>
      <Divider type="vertical" />
      <a className="item">Link</a>
    </div>
  );
};

export default SortType;
