import React, { FC } from 'react';
import LongBanner from '@src/pages/Home/LongBanner';
import styles from './style.less';
import { Link } from 'react-router-dom';
import { range, map } from 'lodash';
import { RightOutlined } from '@ant-design/icons';
import ProductCard from '@src/components/biz/ProductCard';
import { Row, Col } from 'antd';
import { PrimaryCategoryProps } from '@src/pages/Home/PrimaryCategory/interface';

const PrimaryCategory: FC<PrimaryCategoryProps> = props => {
  const { item } = props;
  return (
    <div className={styles.primaryCategoryContainer}>
      <LongBanner />

      <div className="header">
        <h2>{item.name}</h2>
        <Link to="//www.baidu.com" className="more">
          查看更多
          <RightOutlined />
        </Link>
      </div>

      <Row gutter={[24, 24]}>
        {map(item.product_list, (productItem, index) => {
          let className = 'card-box-shadow';

          /* todo 这个地方可以特殊处理 */
          if (index === 0) className = `${className}`;

          return (
            <Col key={productItem.id} span="6">
              <div className="card-container">
                <ProductCard productItem={productItem} className={className} />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default PrimaryCategory;
