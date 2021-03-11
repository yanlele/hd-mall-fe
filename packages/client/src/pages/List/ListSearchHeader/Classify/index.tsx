import React, { FC, useMemo } from 'react';
import { Row, Col } from 'antd';
import { map } from 'lodash';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { Link } from 'react-router-dom';

const Classify: FC = () => {
  const list = useRecoilValue(primaryCategoryListModel);
  console.log('list', list);

  const handleRenderClassifyItem = useMemo(() => {
    return map(list, item => {
      return (
        <p className="item">
          <Link to="list">{item.name}</Link>
        </p>
      );
    });
  }, [list]);

  return (
    <Row className={styles.classifyContainer}>
      <Col span={2}>
        <p className="label">分类：</p>
      </Col>
      <Col className="content" span={22}>
        {handleRenderClassifyItem}
      </Col>
    </Row>
  );
};

export default Classify;
