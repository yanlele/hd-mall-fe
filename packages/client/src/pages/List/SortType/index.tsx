import React, { FC, useEffect, useMemo, useState } from 'react';
import styles from './style.less';
import { Divider, InputNumber, Button } from 'antd';
import { map } from 'lodash';
import { usePersistFn } from 'ahooks';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';
import useHandleQuery from '@src/common/hooks/useHandleQuery';
import cn from 'classnames';

const defaultPrice = {
  min: undefined,
  max: undefined,
};

const SortType: FC = () => {
  const query = useGetQuery();
  const min = get(query, 'min') ? parseInt(get(query, 'min'), 10) : undefined;
  const max = get(query, 'max') ? parseInt(get(query, 'max'), 10) : undefined;

  const [priceLimit, setPriceLimit] = useState({ min, max });
  const { handleAddQuery, handleRemoveQuery } = useHandleQuery();

  useEffect(() => {
    setPriceLimit({ min, max });
  }, [min, max]);

  const sortType = get(query, 'sort_type', '');

  const handleSortClick = usePersistFn((type: number) => {
    if (sortType == type) handleRemoveQuery(['sort_type']);
    else handleAddQuery({ sort_type: type });
  });

  const handleRenderType = useMemo(() => {
    return map(['综合', '销量', '新品'], (item, index) => {
      return (
        <>
          <a
            onClick={() => handleSortClick(index + 1)}
            key={item}
            className={cn('item', sortType == index + 1 && 'active')}>
            {item}
          </a>
          <Divider key={item} type="vertical" />
        </>
      );
    });
  }, [sortType]);

  const handleSetMin = usePersistFn(value => {
    setPriceLimit({ ...priceLimit, min: value });
  });

  const handleSetMax = usePersistFn(value => {
    setPriceLimit({ ...priceLimit, max: value });
  });

  const handlePriceConfirm = usePersistFn(() => {
    if (priceLimit.min && priceLimit.min) handleAddQuery(priceLimit);
    else if (priceLimit.max && !priceLimit.min) handleAddQuery({ max: priceLimit.max });
    else if (priceLimit.min && !priceLimit.max) handleAddQuery({ min: priceLimit.min });
  });

  const handleResetPrice = usePersistFn(() => {
    setPriceLimit(defaultPrice);
    handleRemoveQuery(['max', 'min']);
  });

  return (
    <div className={styles.sortTypeContainer}>
      {handleRenderType}
      <span className="item item-price">
        价格区间：
        <div>
          <InputNumber onChange={handleSetMin} value={priceLimit?.min} min={1} size="small" />
          {' ~ '}
          <InputNumber onChange={handleSetMax} value={priceLimit?.max} max={999999} size="small" />
        </div>
        <Button onClick={handlePriceConfirm} style={{ marginLeft: 8 }} size={'small'}>
          确定
        </Button>
        <Button onClick={handleResetPrice} style={{ marginLeft: 8 }} size={'small'}>
          重置
        </Button>
      </span>
    </div>
  );
};

export default SortType;
