import React, { FC } from 'react';
import { Spin, Table, Image } from 'antd';
import TableAction from '@src/pages/Category/components/CategoryTable/TableAction';
import { CategoryItem } from '@src/pages/Category/service/interface';
import { useRecoilValue } from 'recoil';
import { categoryListModelSelector } from '@src/pages/Category/models';
import { useGetCategoryList } from '@src/pages/Category/userHooks';
import { CategoryType } from '@src/common/enum';

const CategoryTable: FC = () => {
  useGetCategoryList();
  const { list, loading } = useRecoilValue(categoryListModelSelector);

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
      render: (type: number) => {
        return CategoryType[type];
      },
    },
    {
      title: '缩略图',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (item: string) => {
        if (item) return <Image width={100} src={item} />;
        return null;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, categoryItem: CategoryItem) => {
        return <TableAction categoryItem={categoryItem} />;
      },
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table pagination={false} columns={columns} dataSource={list} />
    </Spin>
  );
};

export default CategoryTable;
