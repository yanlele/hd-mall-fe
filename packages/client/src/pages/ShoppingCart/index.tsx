import React, { FC, useMemo, useState } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';
import { columns } from '@src/pages/ShoppingCart/helper';
import { Affix, Button, message, Modal, Table } from 'antd';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import { usePersistFn } from 'ahooks';
import useMountRequest from '@src/pages/ShoppingCart/useHooks/useMountRequest';
import { map, sum, filter, includes } from 'lodash';
import produce from 'immer';
import { deleteShoppingCartRequest, settleAccountsRequest, updateShoppingCartRequest } from '@src/service';
import { useHistory } from 'react-router';

const ShoppingCart: FC = () => {
  const history = useHistory();
  const { list, useRequestResult, setList } = useMountRequest();
  const { loading, refresh } = useRequestResult;
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const onSelectChange = usePersistFn((selectedRowKeys: any[]) => {
    setSelectedRowKeys(selectedRowKeys);
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOnSubmit = usePersistFn(async () => {
    const selectedRow = filter(list, item => includes(selectedRowKeys, item.id));
    const res = await settleAccountsRequest(selectedRow);
    history.push(`/order?temp_order_id=${res.data}`);
  });

  const handleChangeCount = usePersistFn((row: any, value: number) => {
    setList(
      produce(draft => {
        draft.forEach(item => {
          if (item.id === row.id) {
            item.count = value;
          }
        });
      }),
    );
    updateShoppingCartRequest({ id: row.id, count: value });
  });

  const handleTotalPrice = useMemo(() => {
    const selectedRow = filter(list, item => includes(selectedRowKeys, item.id));
    const valueList = map(selectedRow, item => {
      return item?.count * item?.price;
    });

    return sum(valueList);
  }, [list, selectedRowKeys]) as number;

  const handleDeleteAll = usePersistFn(async () => {
    Modal.confirm({
      title: '确认删除选中的所有玩具商品?',
      onOk: async () => {
        await deleteShoppingCartRequest(selectedRowKeys);
        await refresh();
        message.success('删除成功');
      },
    });
  });

  const handleDeleteItem = usePersistFn(async (id: number) => {
    Modal.confirm({
      title: '确认删除当前玩具商品？',
      onOk: async () => {
        await deleteShoppingCartRequest([id]);
        await refresh();
        message.success('删除成功');
      },
    });
  });

  return (
    <AdminContainer>
      <AdminTitleBar>购物车</AdminTitleBar>

      <div className={styles.shoppingCartContainer}>
        <div className="content">
          <Table
            pagination={false}
            loading={loading}
            rowSelection={rowSelection}
            columns={columns({ handleChangeCount, handleDeleteItem })}
            dataSource={map(list, item => Object.assign({}, item, { key: item.id }))}
          />
        </div>
      </div>

      <Affix offsetBottom={12}>
        <footer className={styles.settlement}>
          <div>{selectedRowKeys.length > 0 && <a onClick={handleDeleteAll}>删除全部</a>}</div>
          <div className="handle-settlement">
            <p>
              已选择商品 <span className="count">{selectedRowKeys.length}</span> 件
            </p>
            <p>
              合计：<span className="price">{handleTotalPrice?.toFixed(2)}</span>
            </p>
            <Button onClick={handleOnSubmit}>结算</Button>
          </div>
        </footer>
      </Affix>
    </AdminContainer>
  );
};

export default ShoppingCart;
