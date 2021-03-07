import React, { FC, useMemo } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Divider } from 'antd';
import { map } from 'lodash';
import { useRecoilValue } from 'recoil';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import styles from './style.less';

const HomeHeader: FC = () => {
  const list = useRecoilValue(primaryCategoryListModel);

  const handleRenderPrimaryCategory = useMemo(() => {
    return map(list, item => {
      return (
        <>
          <Divider type="vertical" />
          <div className="link">
            <a>{item.name}</a>
          </div>
        </>
      );
    });
  }, [list]);

  return (
    <header className={styles.homeHeader}>
      <div className="content">
        <div className="left">
          <div className="title">大熊商城</div>

          <div className="link">
            <a>首页</a>
          </div>

          {handleRenderPrimaryCategory}
        </div>

        <div className="right">
          <Input className="search-input" placeholder="请输入你想要的宝贝" prefix={<SearchOutlined />} />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
