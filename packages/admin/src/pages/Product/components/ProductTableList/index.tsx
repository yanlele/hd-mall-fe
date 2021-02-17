import React, { FC } from 'react';
import { Table } from 'antd';
import { columns } from '@src/pages/Product/components/ProductTableList/consts';
import { ProductTableListProps } from '@src/pages/Product/components/ProductTableList/interface';

const ProductTableList: FC<ProductTableListProps> = props => {
  console.log('props.productList', props.productList);
  return <Table columns={columns} dataSource={props.productList} />;
};

export default ProductTableList;
