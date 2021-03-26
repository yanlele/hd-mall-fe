import React, { FC } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import styles from './style.less';

const ProductDetail: FC = () => {
  // 获取所有分类
  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.productDetailContainer}>
      <HomeHeader />

      <div className="detail-content">hello</div>
    </div>
  );
};

export default ProductDetail;
