import React, { FC, useMemo, useState } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';
import { columns } from '@src/pages/ShoppingCart/helper';
import { Affix, Button, message, Table } from 'antd';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import { usePersistFn } from 'ahooks';
import useMountRequest from '@src/pages/ShoppingCart/useHooks/useMountRequest';
import { map, sum } from 'lodash';
import produce from 'immer';
import { deleteShoppingCartRequest, updateShoppingCartRequest } from '@src/service';

const ShoppingCart: FC = () => {
  const { list, useRequestResult, setList } = useMountRequest();
  const { loading, refresh } = useRequestResult;
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [selectedRowState, setSelectedRowState] = useState<any[]>([]);

  const onSelectChange = usePersistFn((selectedRowKeys: any[], value: any[]) => {
    setSelectedRowKeys(selectedRowKeys);
    setSelectedRowState(value);
  });

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleOnSubmit = usePersistFn(() => {
    console.log(selectedRowState);
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
    const valueList = map(selectedRowState, item => {
      return item.count * item.price;
    });

    return sum(valueList);
  }, [selectedRowState?.length]) as number;

  const handleDelete = usePersistFn(async () => {
    console.log(selectedRowKeys);
    await deleteShoppingCartRequest(selectedRowKeys);
    await refresh();
    message.success('删除成功');
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
            columns={columns({ handleChangeCount })}
            dataSource={map(list, item => Object.assign({}, item, { key: item.id }))}
          />
        </div>
      </div>

      <Affix offsetBottom={12}>
        <footer className={styles.settlement}>
          <div>{selectedRowKeys.length > 0 && <a onClick={handleDelete}>删除全部</a>}</div>
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
