import React, { FC, useMemo } from 'react';
import { TreeSelect } from 'antd';
import { map, get } from 'lodash';
import { BaseCategorySelectProps } from '@src/pages/Product/components/ProductCategoryTreeSelect/BaseCategorySelect/interface';
import { useRequest } from 'ahooks';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryItem } from '@src/pages/Category/service/interface';

const { TreeNode } = TreeSelect;

const BaseCategorySelect: FC<BaseCategorySelectProps> = props => {
  const { value, onChange } = props;

  const { data: res } = useRequest(getCategoryListRequest, { cacheKey: 'getCategoryListRequest' });

  const list: CategoryItem[] = get(res, 'data', []) || [];

  const handleOnChange = (value: any) => onChange && onChange(value);

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
