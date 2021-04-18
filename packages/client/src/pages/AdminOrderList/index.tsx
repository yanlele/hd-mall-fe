import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import styles from './style.less';
import { Table } from 'antd';
import { columns } from '@src/pages/ShoppingCart/helper';

const data: any[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AdminOrderList: FC = () => {
  return (
    <AdminContainer>
      <AdminTitleBar>订单列表</AdminTitleBar>

      <div className={styles.adminOrderListContainer}>
        <Table
          pagination={{
            current: 1,
            pageSize: 20,
            total: 46,
            showTitle: true,
          }}
          columns={columns}
          dataSource={data}
        />
      </div>
    </AdminContainer>
  );
};

export default AdminOrderList;
