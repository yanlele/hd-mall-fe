import React, { FC } from 'react';
import styles from './style.less';
import { Row, Col } from 'antd';
import { map } from 'lodash';
import { Link } from 'react-router-dom';

const SearchType: FC = () => {
  return (
    <Row className={styles.searchTypeContainer}>
      <Col span={2}>
        <p className="label">分类：</p>
      </Col>
      <Col className="content" span={22}>
        {map(['仅看有货', '促销商品', '热卖'], (item, index) => {
          return (
            <p className="item" key={index}>
              <Link to="list">{item}</Link>
            </p>
          );
        })}
      </Col>
    </Row>
  );
};

export default SearchType;
