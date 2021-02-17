import React, { FC, useMemo, useState } from 'react';
import { TreeSelect, Row, Col } from 'antd';
import { map, get } from 'lodash';
import { useGetProductCategoryList } from '@src/pages/Product/components/ProductCategoryTreeSelect/userHooks';
import { getProductListRequest } from '@src/pages/Product/service';
import { ProductCategoryTreeSelectProps } from '@src/pages/Product/components/ProductCategoryTreeSelect/interface';

const { TreeNode } = TreeSelect;

const ProductCategoryTreeSelect: FC<ProductCategoryTreeSelectProps> = props => {
  const [value, setValue] = useState();

  const handleOnChange = async (value: any) => {
    setValue(value);

    // 请求获取
    if (!value) props.setProductList([]);
    else {
      const res = await getProductListRequest({ category_id: value, page: 1, page_size: 100 });
      props.setProductList(get(res, 'data.list', []));
    }
  };

  const { list } = useGetProductCategoryList();

  const handleRender = useMemo(() => {
    return map(list, item => {
      if (item.children) {
        return (
          <TreeNode key={item.id} value={item.id} title={item.name}>
            {map(item.children, childrenItem => {
              return <TreeNode key={childrenItem.id} value={childrenItem.id} title={childrenItem.name} />;
            })}
          </TreeNode>
        );
      }
      return <TreeNode key={item.id} value={item.id} title={item.name} />;
    });
  }, [list]);

  return (
    <Row style={{ marginBottom: '12px' }}>
      <Col span={4}>请选择商品分类</Col>
      <Col span={8}>
        <TreeSelect
          showSearch
          style={{ width: '100%' }}
          value={value}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          placeholder="Please select"
          allowClear
          treeDefaultExpandAll
          onChange={handleOnChange}>
          {handleRender}
        </TreeSelect>
      </Col>
    </Row>
  );
};

export default ProductCategoryTreeSelect;
