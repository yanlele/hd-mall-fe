import React, { FC, useRef } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import styles from './style.less';
import MainImageContainer from '@src/pages/ProductDetail/components/MainImageContainer';
import ProductInfo from '@src/pages/ProductDetail/components/ProductInfo';
import { RenderComponent } from '@src/components/biz/CustomTabs/interface';
import CustomTabs from '@src/components/biz/CustomTabs';
import DetailImage from '@src/pages/ProductDetail/components/DetailImage';
import { useMount, useTitle } from 'ahooks';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { getDetailRequest } from '@src/pages/ProductDetail/service';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';

/**
 * 详情页面
 * @constructor
 */
const ProductDetail: FC = () => {
  useTitle('详情页面');
  const query = useGetQuery();

  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  useMount(() => {
    getDetailRequest(get(query, 'id'));
  });

  const componentListRef = useRef<RenderComponent[]>([
    {
      title: '商品详情',
      component: <DetailImage />,
    },
  ]);

  return (
    <div className={styles.productDetailContainer}>
      <HomeHeader />

      <div className="detail-content">
        <div className="main-content">
          <MainImageContainer />

          <ProductInfo />
        </div>
      </div>
      <hr className="hr-line" />

      <div className="detail-content">
        <CustomTabs components={componentListRef.current} />
      </div>
    </div>
  );
};

export default ProductDetail;
