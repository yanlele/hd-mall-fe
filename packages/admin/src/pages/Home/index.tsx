import React, { FC } from 'react';
import { useTitle } from 'ahooks';
import HeaderComponent from '@src/components/biz/HeaderComponent';
import { Tabs } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';

const { TabPane } = Tabs;

const Home: FC = () => {
  useTitle('首页管理');

  return (
    <div>
      <HeaderComponent leftChild={<h1>管理首页</h1>} />
      <hr />

      <Tabs>
        <TabPane
          tab={
            <span>
              <SmileTwoTone />
              banner 配置
            </span>
          }
          key="1">
          123123123
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
