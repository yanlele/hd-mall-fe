import React, { FC } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import styles from './style.less';

/**
 * 详情页面
 * @constructor
 */
const ProductDetail: FC = () => {
  // 获取所有分类
  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.productDetailContainer}>
      <HomeHeader />

      <div className="detail-content">
        <div className="main-content">
          <div className="image-container">image</div>
          <div className="detail-container">detail</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
