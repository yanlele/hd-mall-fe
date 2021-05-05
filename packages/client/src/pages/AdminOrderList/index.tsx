import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import styles from './style.less';
import { Badge, Dropdown, Menu, Space, Spin, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ExpandedRowRender } from 'rc-table/lib/interface';
import handleGetColumnsHelper from '@src/pages/AdminOrderList/helper/handleGetColumnsHelper';

const data: any[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const expandedRowRender: ExpandedRowRender<any> = (record, index, indent, expanded) => {
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
    {
      title: 'Action',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
        <Space size="middle">
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown overlay={menu}>
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
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

const AdminOrderList: FC = () => {
  const columns = handleGetColumnsHelper();

  return (
    <AdminContainer>
      <AdminTitleBar>订单列表</AdminTitleBar>

      <div className={styles.adminOrderListContainer}>
        <Table
          expandable={{ expandedRowRender }}
          className="order-table"
          pagination={false}
          columns={columns}
          dataSource={data}
        />
      </div>
    </AdminContainer>
  );
};

export default AdminOrderList;
