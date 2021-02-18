import React, { FC } from 'react';
import { Tabs } from 'antd';
import { AppstoreAddOutlined } from '@ant-design/icons';
import CategoryTable from '@src/pages/Category/components/CategoryTable';

const { TabPane } = Tabs;

const TabContainer: FC = () => {
  return (
    <Tabs>
      <TabPane
        tab={
          <span>
            <AppstoreAddOutlined />
            品类列表
          </span>
        }
        key="1">
        <CategoryTable />
      </TabPane>
    </Tabs>
  );
};

export default TabContainer;
