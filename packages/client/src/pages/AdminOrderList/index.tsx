import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import styles from './style.less';
import { Table } from 'antd';
import handleGetColumnsHelper from '@src/pages/AdminOrderList/helper/handleGetColumnsHelper';
import handleExpandedRowRenderHelper from '@src/pages/AdminOrderList/helper/handleExpandedRowRenderHelper';

const data: any[] = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const AdminOrderList: FC = () => {
  const columns = handleGetColumnsHelper();

  return (
    <AdminContainer>
      <AdminTitleBar>订单列表</AdminTitleBar>

      <div className={styles.adminOrderListContainer}>
        <Table
          expandable={{ expandedRowRender: handleExpandedRowRenderHelper }}
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
