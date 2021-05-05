import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import styles from './style.less';
import { Spin, Table } from 'antd';
import handleGetColumnsHelper from '@src/pages/AdminOrderList/helper/handleGetColumnsHelper';
import handleExpandedRowRenderHelper from '@src/pages/AdminOrderList/helper/handleExpandedRowRenderHelper';
import { useRequest } from 'ahooks';
import { getOrderList } from '@src/service';
import { get } from 'lodash';

const AdminOrderList: FC = () => {
  const { data: res, loading } = useRequest(getOrderList);
  const orderList = get(res, 'data', []);
  console.log(orderList);

  const columns = handleGetColumnsHelper();

  return (
    <AdminContainer>
      <AdminTitleBar>订单列表</AdminTitleBar>

      <div className={styles.adminOrderListContainer}>
        <Spin spinning={loading}>
          <Table
            expandable={{ expandedRowRender: handleExpandedRowRenderHelper }}
            className="order-table"
            pagination={false}
            columns={columns}
            dataSource={orderList}
          />
        </Spin>
      </div>
    </AdminContainer>
  );
};

export default AdminOrderList;
