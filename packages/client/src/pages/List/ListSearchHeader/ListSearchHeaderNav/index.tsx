import React, { FC } from 'react';
import { Breadcrumb, Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.less';
import useHandleQuery from '@src/common/hooks/useHandleQuery';

const ListSearchHeaderNav: FC = () => {
  const { handleRemoveQuery } = useHandleQuery();

  return (
    <div className={styles.listSearchHeaderNavContainer}>
      <Breadcrumb className="left">
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>列表</Breadcrumb.Item>
      </Breadcrumb>
      <div className="right">
        <Button onClick={() => handleRemoveQuery([])} size="small">
          清除所有筛选条件
        </Button>
      </div>
    </div>
  );
};

export default ListSearchHeaderNav;
