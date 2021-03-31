import React, { FC } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import styles from './style.less';
import MainImageContainer from '@src/pages/ProductDetail/components/MainImageContainer';
import ProductInfo from '@src/pages/ProductDetail/components/ProductInfo';

/**
 * 详情页面
 * @constructor
 */
const ProductDetail: FC = () => {
  return (
    <div className={styles.productDetailContainer}>
      <HomeHeader />

      <div className="detail-content">
        <div className="main-content">
          <MainImageContainer />

          <ProductInfo />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
