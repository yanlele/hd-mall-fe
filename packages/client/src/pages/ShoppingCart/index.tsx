import React, { FC, useState } from 'react';
import AdminContainer from '@src/components/biz/AdminContainer';
import styles from './style.less';
import { columns } from '@src/pages/ShoppingCart/helper';
import { Affix, Button, Table } from 'antd';
import AdminTitleBar from '@src/components/biz/AdminTitleBar';

const data: any[] = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const ShoppingCart: FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const onSelectChange = (selectedRowKeys: any[]) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <AdminContainer>
      <AdminTitleBar>购物车</AdminTitleBar>

      <div className={styles.shoppingCartContainer}>
        <div className="content">
          <Table
            pagination={{
              current: 1,
              pageSize: 20,
              total: 46,
              showTitle: true,
            }}
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
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
            <Button>结算</Button>
          </div>
        </footer>
      </Affix>
    </AdminContainer>
  );
};

export default ShoppingCart;
