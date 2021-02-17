import React, { FC, useMemo } from 'react';
import { TreeSelect } from 'antd';
import { useGetProductCategoryList } from '@src/pages/Product/components/ProductCategoryTreeSelect/userHooks';
import { map } from 'lodash';
import { BaseCategorySelectProps } from '@src/pages/Product/components/ProductCategoryTreeSelect/BaseCategorySelect/interface';

const { TreeNode } = TreeSelect;

const BaseCategorySelect: FC<BaseCategorySelectProps> = props => {
  const { value, onChange } = props;
  const { list } = useGetProductCategoryList();

  const handleOnChange = (value: any) => onChange(value);

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
  );
};

export default BaseCategorySelect;
