import React, { FC } from 'react';
import { Tabs } from 'antd';
import { AppstoreAddOutlined, AndroidOutlined } from '@ant-design/icons';
import ProductList from '@src/pages/Product/components/ProductList';

const { TabPane } = Tabs;

const TabContainer: FC = () => {
  return (
    <Tabs>
      <TabPane
        tab={
          <span>
            <AppstoreAddOutlined />
            所有商品
          </span>
        }
        key="1">
        <ProductList />
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Tab 2
          </span>
        }
        key="2">
        Tab 2
      </TabPane>
    </Tabs>
  );
};

export default TabContainer;
