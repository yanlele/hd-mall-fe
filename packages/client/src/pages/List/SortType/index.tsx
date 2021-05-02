import React, { FC, useMemo } from 'react';
import styles from './style.less';
import { Divider, InputNumber, Button } from 'antd';
import { map } from 'lodash';
import { usePersistFn } from 'ahooks';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';
import useHandleQuery from '@src/common/hooks/useHandleQuery';

const SortType: FC = () => {
  const query = useGetQuery();
  const { handleAddQuery, handleRemoveQuery } = useHandleQuery();

  const sortType = get(query, 'sortType', '');

  const handleSortClick = usePersistFn((type: number) => {
    if (sortType == type) handleRemoveQuery(['sortType']);
    else handleAddQuery({ sortType: type });
  });
  const handleRenderType = useMemo(() => {
    return map(['综合', '销量', '新品'], (item, index) => {
      return (
        <>
          <a onClick={() => handleSortClick(index + 1)} key={item} className="item">
            {item}
          </a>
          <Divider key={item} type="vertical" />
        </>
      );
    });
  }, []);

  return (
    <div className={styles.sortTypeContainer}>
      {handleRenderType}
      <span className="item item-price">
        价格区间：
        <div>
          <InputNumber min={1} size="small" />
          {' ~ '}
          <InputNumber max={999999} size="small" />
        </div>
        <Button style={{ marginLeft: 8 }} size={'small'}>
          确定
        </Button>
        <Button style={{ marginLeft: 8 }} size={'small'}>
          重置
        </Button>
      </span>
    </div>
  );
};

export default SortType;
