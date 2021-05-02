import React, { FC, useRef } from 'react';
import HomeHeader from '@src/components/biz/HomeHeader';
import styles from './style.less';
import MainImageContainer from '@src/pages/ProductDetail/components/MainImageContainer';
import ProductInfo from '@src/pages/ProductDetail/components/ProductInfo';
import { RenderComponent } from '@src/components/biz/CustomTabs/interface';
import CustomTabs from '@src/components/biz/CustomTabs';
import DetailImage from '@src/pages/ProductDetail/components/DetailImage';
import { useTitle } from 'ahooks';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import useGetDetailInfo from '@src/pages/ProductDetail/hooks/useGetDetailInfo';
import { Spin } from 'antd';
import { useRecoilValue } from 'recoil';
import getDetailInfoModel from '@src/pages/ProductDetail/model/getDetailInfoModel';

/**
 * 详情页面
 * @constructor
 */
const ProductDetail: FC = () => {
  useTitle('详情页面');
  // 获取主要分类和产品
  useGetPrimaryCategoryList(primaryCategoryListModel);

  // 获取列表数据信息
  useGetDetailInfo();

  const { loading } = useRecoilValue(getDetailInfoModel);

  const componentListRef = useRef<RenderComponent[]>([
    {
      title: '商品详情',
      component: <DetailImage />,
    },
  ]);

  return (
    <div className={styles.productDetailContainer}>
      <HomeHeader />
      <Spin spinning={loading}>
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
      </Spin>
    </div>
  );
};

export default ProductDetail;
