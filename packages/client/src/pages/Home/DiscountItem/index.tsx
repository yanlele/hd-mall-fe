import React, { FC } from 'react';
import styles from './style.less';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useBindCountTime } from '@src/pages/Home/useHooks';

const DiscountItem: FC = () => {
  // 是否已经结束
  const isCountDown = useBindCountTime(new Date('2020-02-23'));

  return (
    <div className={styles.discountItemContainer}>
      <p>10:00 场 </p>
      <p>
        <ThunderboltOutlined />
      </p>
      <p>{isCountDown ? '活动已经结束' : '距离结束还有'}</p>
      <p>
        <span id="_d">00</span> :<span id="_h">00</span> :<span id="_m">00</span> :<span id="_s">00</span>
      </p>
    </div>
  );
};

export default DiscountItem;
