import React, { FC } from 'react';
import { Tabs } from 'antd';
import { AppstoreAddOutlined, AndroidOutlined } from '@ant-design/icons';
import ProductListTab from '@src/pages/Product/components/ProductListTab';
import CreateProductTab from '@src/pages/Product/components/CreateProductTab';

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
        <ProductListTab />
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            创建商品
          </span>
        }
        key="2">
        <CreateProductTab />
      </TabPane>
    </Tabs>
  );
};

export default TabContainer;
