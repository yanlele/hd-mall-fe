import React, { FC } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Divider } from 'antd';
import styles from './style.less';

const HomeHeader: FC = () => {
  return (
    <header className={styles.homeHeader}>
      <div className="content">
        <div className="left">
          <div className="title">大熊商城</div>

          <div className="link">
            <a>首页</a>
          </div>
          <Divider type="vertical" />

          <div className="link">
            <a>盲盒</a>
          </div>
          <Divider type="vertical" />
          <div className="link">
            <a>毛绒玩具</a>
          </div>
          <Divider type="vertical" />
          <div className="link">
            <a>电子玩具</a>
          </div>
          <Divider type="vertical" />
          <div className="link">
            <a>益智棋牌</a>
          </div>
          <Divider type="vertical" />
          <div className="link">
            <a>魔法道具</a>
          </div>
        </div>

        <div className="right">
          <Input className="search-input" placeholder="请输入你想要的宝贝" prefix={<SearchOutlined />} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
