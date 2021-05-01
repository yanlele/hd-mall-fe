import React, { FC } from 'react';
import styles from './style.less';
import { Row, Col } from 'antd';
import { get, map } from 'lodash';
import useGetQuery from '@src/common/hooks/useGetQuery';
import useHandleQuery from '@src/common/hooks/useHandleQuery';
import { usePersistFn } from 'ahooks';
import cn from 'classnames';

const SearchType: FC = () => {
  const query = useGetQuery();
  const type = get(query, 'type', '');
  const { handleAddQuery, handleRemoveQuery } = useHandleQuery();

  const handleOnReplace = usePersistFn((currentType: number) => {
    if (currentType == type) handleRemoveQuery(['type']);
    else handleAddQuery({ type: currentType });
  });

  return (
    <Row className={styles.searchTypeContainer}>
      <Col span={2}>
        <p className="label">商品类型：</p>
      </Col>
      <Col className="content" span={22}>
        {map(['仅看有货', '促销商品', '热卖'], (item, index) => {
          return (
            <p className={cn('item', type == index + 1 && 'active')} key={index}>
              <a onClick={() => handleOnReplace(index + 1)}>{item}</a>
            </p>
          );
        })}
      </Col>
    </Row>
  );
};

export default SearchType;
