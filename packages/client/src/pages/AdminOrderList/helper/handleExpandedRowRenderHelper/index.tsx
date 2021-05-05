import { ExpandedRowRender } from 'rc-table/lib/interface';
import { Badge, Spin, Table } from 'antd';
import React from 'react';

const data: any[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const handleExpandedRowRenderHelper: ExpandedRowRender<any> = (record, index, indent, expanded) => {
  console.log({ record, index, indent, expanded });
  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    {
      title: 'Status',
      key: 'state',
      render: () => (
        <span>
          <Badge status="success" />
          Finished
        </span>
      ),
    },
    { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      date: '2014-12-24 23:12:00',
      name: 'This is production name',
      upgradeNum: 'Upgraded: 56',
    });
  }
  return (
    <Spin spinning={false}>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Spin>
  );
};

export default handleExpandedRowRenderHelper;
