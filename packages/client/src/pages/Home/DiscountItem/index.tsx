import React, { FC } from 'react';
import styles from './style.less';
import { ThunderboltOutlined } from '@ant-design/icons';
import { useBindCountTime } from '@src/pages/Home/useHooks';

const DiscountItem: FC = () => {
  // 是否已经结束
  const isCountDown = useBindCountTime(new Date('2021-02-23'));

  return (
    <div className={styles.discountItemContainer}>
      {/* todo 动态时间 */}
      <p className="time">10:00 场</p>

      <p className="icon">
        <ThunderboltOutlined />
      </p>

      <p className="desc">{isCountDown ? '活动已经结束' : '距离结束还有'}</p>

      <p className="date-container">
        <span id="_h" className="date">
          00
        </span>
        <span className="divide">:</span>
        <span id="_m" className="date">
          00
        </span>
        <span className="divide">:</span>
        <span id="_s" className="date">
          00
        </span>
      </p>
    </div>
  );
};

export default DiscountItem;
