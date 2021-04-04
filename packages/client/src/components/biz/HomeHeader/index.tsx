import React, { FC, useMemo } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Divider } from 'antd';
import { map } from 'lodash';
import { useRecoilValue } from 'recoil';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { Link } from 'react-router-dom';
import styles from './style.less';

/**
 * header
 * @constructor
 */
const HomeHeader: FC = () => {
  const list = useRecoilValue(primaryCategoryListModel);

  const handleRenderPrimaryCategory = useMemo(() => {
    return map(list, item => {
      const { id } = item;
      return (
        <>
          <Divider key={id} type="vertical" />
          <div key={id} className="link">
            <Link to={`/list?id=${id}`}>{item.name}</Link>
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
            <Link to="/">首页</Link>
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
