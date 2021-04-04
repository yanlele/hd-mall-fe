import React, { FC } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import styles from './style.less';
import MainImageContainer from '@src/pages/ProductDetail/components/MainImageContainer';
import ProductInfo from '@src/pages/ProductDetail/components/ProductInfo';
import { RenderComponent } from '@src/components/biz/CustomTabs/interface';
import CustomTabs from '@src/components/biz/CustomTabs';

const componentList: RenderComponent[] = [
  {
    title: '商品详情',
    component: <span>商品详情</span>,
  },

  {
    title: '用户评价（233）',
    component: <span>用户评价</span>,
  },
];

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
      <hr className="line" />

      <div className="detail-content">
        <CustomTabs components={componentList} />
      </div>
    </div>
  );
};

export default ProductDetail;
