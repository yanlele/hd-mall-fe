import React, { FC, useMemo, useState } from 'react';
import { CustomTabsProps } from '@src/components/biz/CustomTabs/interface';
import { map } from 'lodash';
import styles from './style.less';
import cn from 'classnames';

const CustomTabs: FC<CustomTabsProps> = props => {
  const { components } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabItemListRender = useMemo(() => {
    return map(components, (item, index) => {
      return (
        <span
          onClick={() => setActiveIndex(index)}
          className={cn('tab', activeIndex === index && 'active')}
          key={index}>
          {item.title}
        </span>
      );
    });
  }, [components, activeIndex]);

  const handleTabItemContentListRender = useMemo(
    () =>
      map(components, (item, index) => {
        return (
          <div key={index} className={cn('content', activeIndex === index && 'active')}>
            {item.component}
          </div>
        );
      }),
    [components, activeIndex],
  );

  return (
    <div className={styles.customTabsContainer}>
      <div className="tab-list-container">{handleTabItemListRender}</div>
      <div className="tab-content-container">{handleTabItemContentListRender}</div>
    </div>
  );
};

export default CustomTabs;
