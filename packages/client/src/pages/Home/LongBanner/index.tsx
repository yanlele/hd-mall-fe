import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';
import { PrimaryCategory } from '@src/pages/Home/service/interface';
import { get } from 'lodash';

const LongBanner: FC<{ item: PrimaryCategory }> = ({ item }) => {
  return (
    <Link className={styles.longBannerContainer} to={`/list?id=${item.id}`} target="_blank">
      <img src={get(item, 'banner_image')} alt="无法显示" />
    </Link>
  );
};

export default LongBanner;
