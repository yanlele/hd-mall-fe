import React, { FC } from 'react';
import { Layout } from 'antd';
import styles from './style.less';

const { Footer } = Layout;

const FooterComponent: FC = () => {
  return <Footer className={styles.footerContainer}>footer</Footer>;
};

export default FooterComponent;
