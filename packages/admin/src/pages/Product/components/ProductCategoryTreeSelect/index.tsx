import React, { FC, useState } from 'react';
import { Row, Col } from 'antd';
import { ProductCategoryTreeSelectProps } from '@src/pages/Product/components/ProductCategoryTreeSelect/interface';
import BaseCategorySelect from '@src/pages/Product/components/ProductCategoryTreeSelect/BaseCategorySelect';
import queryString from 'query-string';
import { handleGetListHelper } from '@src/pages/Product/components/ProductListTab/helper';

const ProductCategoryTreeSelect: FC<ProductCategoryTreeSelectProps> = props => {
  const { setGetListLoading, setProductList } = props;
  const [value, setValue] = useState();

  const handleOnChange = async (value: any) => {
    setValue(value);

    // 请求获取
    if (setProductList) {
      if (!value) setProductList([]);
      else {
        const query = queryString.stringify({ category_id: value });
        window.HistoryRouter.replace(`${window.location.pathname}?${query}`);
        await handleGetListHelper({ setGetListLoading, setProductList });
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
