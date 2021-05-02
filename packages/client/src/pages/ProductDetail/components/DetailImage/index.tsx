import React, { FC, useMemo } from 'react';
import { Col, Row } from 'antd';
import styles from './style.less';
import { useRecoilValue } from 'recoil';
import getDetailInfoModel from '@src/pages/ProductDetail/model/getDetailInfoModel';
import { get, map } from 'lodash';

const DetailImage: FC = () => {
  const { detail } = useRecoilValue(getDetailInfoModel);
  const params = get(detail, 'params');
  const detailImageList = get(detail, 'product_detail_image_list', []);

  const getProductParams = useMemo(() => {
    try {
      return JSON.parse(params);
    } catch (e) {
      return [];
    }
  }, [params]);

  const getDetailImageList = useMemo(() => detailImageList, [detailImageList.length]);

  return (
    <div className={styles.detailImageContainer}>
      <div className="params-container">
        <div className="title">产品参数</div>
        <div className="params-content">
          <Row gutter={[24, 16]}>
            {map(getProductParams, item => {
              return (
                <Col span={12} className="item-content">
                  <span className="label">{item.key}</span>
                  <span className="value">{item.value}</span>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>

      <div className="detail-image-list">
        {map(getDetailImageList, item => {
          return <img key={item.id} src={item.url} alt="" />;
        })}
      </div>
    </div>
  );
};

export default DetailImage;
