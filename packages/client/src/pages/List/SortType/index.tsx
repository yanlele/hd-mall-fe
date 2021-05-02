import React, { FC } from 'react';
import styles from './style.less';
import { Divider } from 'antd';

const SortType: FC = () => {
  return (
    <div className={styles.sortTypeContainer}>
      <a className="item">综合</a>
      <Divider type="vertical" />
      <a className="item">销量</a>
      <Divider type="vertical" />
      <a className="item">新品</a>
      <Divider type="vertical" />
      <span className="item">价格区间</span>
    </div>
  );
};

export default SortType;
