import React, { FC, useMemo } from 'react';
import { Row, Col } from 'antd';
import { map, get } from 'lodash';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import { categoryListModel } from '@src/pages/Home/model';
import cn from 'classnames';
import { ClassifyProps } from '@src/pages/List/ListSearchHeader/Classify/interface';
import useGetQuery from '@src/common/hooks/useGetQuery';
import useHandleQuery from '@src/common/hooks/useHandleQuery';
import { usePersistFn } from 'ahooks';

const Classify: FC<ClassifyProps> = props => {
  const { title = '分类' } = props;
  const list = useRecoilValue(categoryListModel);
  const query = useGetQuery();
  const categoryId = get(query, 'id', '');

  const { handleAddQuery, handleRemoveQuery } = useHandleQuery();

  const handleOnReplace = usePersistFn((id: number) => {
    if (categoryId == id) handleRemoveQuery(['id']);
    else handleAddQuery({ id });
  });

  const handleRenderClassifyItem = useMemo(() => {
    return map(list, item => {
      return (
        <p className={cn('item', categoryId == item.id && 'active')}>
          <a onClick={() => handleOnReplace(item.id)}>{item.name}</a>
        </p>
      );
    });
  }, [list, categoryId]);

  return (
    <Row className={styles.classifyContainer}>
      <Col span={2}>
        <p className="label">{title}：</p>
      </Col>
      <Col className="content" span={22}>
        {handleRenderClassifyItem}
      </Col>
    </Row>
  );
};

export default Classify;
