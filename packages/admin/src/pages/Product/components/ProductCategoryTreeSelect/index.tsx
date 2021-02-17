import React, { FC, useMemo, useState } from 'react';
import { TreeSelect, Row, Col } from 'antd';
import { map } from 'lodash';
import { useGetProductCategoryList } from '@src/pages/Product/components/ProductCategoryTreeSelect/userHooks';

const { TreeNode } = TreeSelect;

const ProductCategoryTreeSelect: FC = () => {
  const [value, setValue] = useState();

  const handleOnChange = (value: any) => {
    setValue(value);
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
    <Row>
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
