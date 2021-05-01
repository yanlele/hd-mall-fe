import React, { FC, useMemo } from 'react';
import { Row, Col } from 'antd';
import { map } from 'lodash';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import { categoryListModel } from '@src/pages/Home/model';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ClassifyProps } from '@src/pages/List/ListSearchHeader/Classify/interface';

const Classify: FC<ClassifyProps> = props => {
  const { title = '分类' } = props;
  const list = useRecoilValue(categoryListModel);

  const handleRenderClassifyItem = useMemo(() => {
    return map(list, item => {
      return (
        <p className={cn('item')}>
          <Link to={`/list?id=${item.id}`}>{item.name}</Link>
        </p>
      );
    });
  }, [list]);

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
