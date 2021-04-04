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

      <div className="detail-image-list">
        <img src="https://p3.ssl.qhmsg.com/t01a66bf5c423d2fbc2.webp" alt="" />
        <img src="https://p1.ssl.qhmsg.com/t01d5aca6061c7fbf4d.webp" alt="" />
        <img src="https://p3.ssl.qhmsg.com/t01fd9a45f246b713a7.webp" alt="" />
        <img src="https://p4.ssl.qhmsg.com/t018e59b475a5a0da68.webp" alt="" />
        <img src="https://p0.ssl.qhmsg.com/t0101607f085693bb7e.webp" alt="" />
        <img src="https://p4.ssl.qhmsg.com/t018a74bd727f3c79ad.webp" alt="" />
        <img src="https://p2.ssl.qhmsg.com/t01c09beaefccf252f1.webp" alt="" />
        <img src="https://p3.ssl.qhmsg.com/t01202739971b60b565.webp" alt="" />
      </div>
    </div>
  );
};

export default DetailImage;
