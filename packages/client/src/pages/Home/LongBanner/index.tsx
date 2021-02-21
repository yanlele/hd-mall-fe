import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.less';

const LongBanner: FC = () => {
  return (
    <Link className={styles.longBannerContainer} to="//www.baidu.com" target="_blank">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2733011025,434524842&fm=26&gp=0.jpg"
        alt="无法显示"
      />
    </Link>
  );
};

export default LongBanner;
