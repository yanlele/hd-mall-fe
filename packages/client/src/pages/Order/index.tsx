import React, { FC } from 'react';
import styles from './style.less';
import { useGetPrimaryCategoryList } from '@src/pages/Home/service/useHomeService';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { useTitle } from 'ahooks';
import OrderHeader from '@src/pages/Order/components/OrderHeader';
import OrderAddress from '@src/pages/Order/components/OrderAddress';
import OrderInfo from '@src/pages/Order/components/OrderInfo';

const Order: FC = () => {
  useTitle('订单');

  // 获取主要分类
  useGetPrimaryCategoryList(primaryCategoryListModel);

  return (
    <div className={styles.orderPageContainer}>
      <OrderHeader />

      <div className="order-content">
        <OrderAddress />

        <OrderInfo />
      </div>
    </div>
  );
};

export default Order;
