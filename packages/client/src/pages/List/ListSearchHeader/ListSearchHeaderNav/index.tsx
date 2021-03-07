import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

const ListSearchHeaderNav: FC = () => {
  return (
    <nav>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">首页</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>列表</Breadcrumb.Item>
      </Breadcrumb>
    </nav>
  );
};

export default ListSearchHeaderNav;
