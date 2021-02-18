import React, { FC, useMemo } from 'react';
import { Col, Divider, Row } from 'antd';
import { ProductBaseProps } from '@src/pages/Product/components/ProductDetailModal/interface';
import { isEmpty, map } from 'lodash';

const ProductParams: FC<ProductBaseProps> = props => {
  const { record } = props;
  const params = useMemo(() => {
    if (record.params) {
      let params: { key: string; value: string }[] = [];
      try {
        params = JSON.parse(record.params);
      } catch (e) {}
      return params;
    }
    return [];
  }, [props.record.params]);

  const handleRender = useMemo(() => {
    if (isEmpty(params)) return null;

    return map(params, item => {
      return (
        <Col span={8}>
          <p>
            {item.key}: {item.value}
          </p>
        </Col>
      );
    });
  }, [params]);

  return (
    <>
      <Divider>基本参数</Divider>

      <div className="item">
        <Row gutter={[16, 16]}>{handleRender}</Row>
      </div>
    </>
  );
};

export default ProductParams;
