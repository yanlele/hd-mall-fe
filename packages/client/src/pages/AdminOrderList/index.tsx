import React, { FC } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import styles from './style.less';
import { message, Modal, Spin, Table } from 'antd';
import handleGetColumnsHelper from '@src/pages/AdminOrderList/helper/handleGetColumnsHelper';
import handleExpandedRowRenderHelper from '@src/pages/AdminOrderList/helper/handleExpandedRowRenderHelper';
import { usePersistFn, useRequest } from 'ahooks';
import { deleteOrderRequest, getOrderList, updateOrderRequest } from '@src/service';
import { get, map } from 'lodash';

const AdminOrderList: FC = () => {
  const { data: res, loading, refresh } = useRequest(getOrderList);
  const orderList = get(res, 'data', []);

  const handleDelete = usePersistFn(async id => {
    Modal.confirm({
      title: '确认删除该订单信息',
      onOk: async () => {
        await deleteOrderRequest({ id });
        await refresh();
        message.success('删除订单信息成功');
      },
    });
  });

  const handleConfirmOrder = usePersistFn(async id => {
    Modal.confirm({
      title: '确认收货',
      onOk: async () => {
        await updateOrderRequest({ id, status: 4 });
        await refresh();
        message.success('确认收货成功');
      },
    });
  });

  const columns = handleGetColumnsHelper({ handleDelete, handleConfirmOrder });

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
            dataSource={map(orderList, item =>
              Object.assign({}, item, {
                key: item.id,
              }),
            )}
          />
        </Spin>
      </div>
    </AdminContainer>
  );
};

export default AdminOrderList;
