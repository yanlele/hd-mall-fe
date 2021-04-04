import React, { FC } from 'react';
import { Col, Row } from 'antd';
import styles from './style.less';

const DetailImage: FC = () => {
  return (
    <div className={styles.detailImageContainer}>
      <div className="params-container">
        <div className="title">产品参数</div>
        <div className="params-content">
          <Row gutter={[24, 16]}>
            <Col span={12} className="item-content">
              <span className="label">label</span>
              <span className="value">value</span>
            </Col>
            <Col span={12} className="item-content">
              <span className="label">label</span>
              <span className="value">value</span>
            </Col>
            <Col span={12} className="item-content">
              <span className="label">label</span>
              <span className="value">value</span>
            </Col>
            <Col span={12} className="item-content">
              <span className="label">label</span>
              <span className="value">value</span>
            </Col>
            <Col span={12} className="item-content">
              <span className="label">label</span>
              <span className="value">value</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DetailImage;
