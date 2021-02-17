import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import { get } from 'lodash';
import { getProductListRequest } from '@src/pages/Product/service';
import { ProductCategoryTreeSelectProps } from '@src/pages/Product/components/ProductCategoryTreeSelect/interface';
import BaseCategorySelect from '@src/pages/Product/components/ProductCategoryTreeSelect/BaseCategorySelect';

const ProductCategoryTreeSelect: FC<ProductCategoryTreeSelectProps> = props => {
  const [value, setValue] = useState();

  const handleOnChange = async (value: any) => {
    setValue(value);

    // 请求获取
    if (props.setProductList) {
      if (!value) props.setProductList([]);
      else {
        const res = await getProductListRequest({ category_id: value, page: 1, page_size: 100 });
        props.setProductList(get(res, 'data.list', []));
      }
    }
  };

  return (
    <Row style={{ marginBottom: '12px' }}>
      <Col span={4}>请选择商品分类</Col>
      <Col span={8}>
        <BaseCategorySelect value={value} onChange={handleOnChange} />
      </Col>
    </Row>
  );
};

export default ProductCategoryTreeSelect;
