import React, { FC, useState } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';
import { columns } from '@src/pages/ShoppingCart/helper';
import { Affix, Button, Table } from 'antd';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';
import { usePersistFn } from 'ahooks';
import useMountRequest from '@src/pages/ShoppingCart/useHooks/useMountRequest';
import { map, forEach } from 'lodash';
import produce from 'immer';

const ShoppingCart: FC = () => {
  const { list, useRequestResult, setList } = useMountRequest();
  const { loading } = useRequestResult;
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

  console.log(list);

  const handleChangeCount = usePersistFn((row: any, value: number) => {
    setList(
      produce(draft => {
        forEach(draft, item => {
          if (item.id === row.id) {
            row.count = value;
          }
        });
      }),
    );
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
          <div>{selectedRowKeys.length > 0 && <a>删除全部</a>}</div>
          <div className="handle-settlement">
            <p>
              已选择商品 <span className="count">{selectedRowKeys.length}</span> 件
            </p>
            <p>
              合计：<span className="price">0.00</span>
            </p>
            <Button onClick={handleOnSubmit}>结算</Button>
          </div>
        </footer>
      </Affix>
    </AdminContainer>
  );
};

export default ShoppingCart;
