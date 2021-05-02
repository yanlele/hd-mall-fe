import React, { FC, useMemo, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Divider } from 'antd';
import { map } from 'lodash';
import { useRecoilValue } from 'recoil';
import { primaryCategoryListModel } from '@src/pages/Home/model';
import { Link } from 'react-router-dom';
import styles from './style.less';
import useHandleQuery from '@src/common/hooks/useHandleQuery';

/**
 * header
 * @constructor
 */
const HomeHeader: FC = () => {
  const list = useRecoilValue(primaryCategoryListModel);
  const { handleAddQuery, handleRemoveQuery } = useHandleQuery();
  const [search, setSearch] = useState('');

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
          <Link className="title" to="/list">
            大熊商城
          </Link>

          <div className="link">
            <Link to="/">首页</Link>
          </div>

          {handleRenderPrimaryCategory}
        </div>

        <div className="right">
          <Input
            onPressEnter={() => {
              if (search) handleAddQuery({ query: search });
              else handleRemoveQuery(['query']);
            }}
            allowClear
            onChange={e => {
              setSearch(e.target.value);
              if (!e.target.value) handleRemoveQuery(['query']);
            }}
            value={search}
            className="search-input"
            placeholder="请输入你想要的宝贝"
            prefix={<SearchOutlined />}
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
