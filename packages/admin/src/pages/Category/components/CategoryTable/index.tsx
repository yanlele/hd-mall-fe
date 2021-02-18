import React, { FC, useState } from 'react';
import { Spin, Table } from 'antd';
import { useGetProductCategoryList as useGetCategoryList } from '@src/pages/Product/components/ProductCategoryTreeSelect/userHooks';
import TableAction from '@src/pages/Category/components/CategoryTable/TableAction';
import { CategoryItem } from '@src/pages/Category/service/interface';

const CategoryTable: FC = () => {
  const { list } = useGetCategoryList();
  const [tableKey, setTableKey] = useState(1);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '缩略图',
      dataIndex: 'avatar',
      key: 'avatar',
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, categoryItem: CategoryItem) => {
        return <TableAction setTableKey={setTableKey} tableKey={tableKey} categoryItem={categoryItem} />;
      },
    },
  ];

  return (
    <Spin spinning={false}>
      <Table pagination={false} columns={columns} dataSource={list} />
    </Spin>
  );
};

export default CategoryTable;
