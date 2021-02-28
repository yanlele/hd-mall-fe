import React, { FC } from 'react';
import { useTitle } from 'ahooks';
import HeaderComponent from '@src/components/biz/HeaderComponent';

const Home: FC = () => {
  useTitle('首页管理');

  return (
    <div>
      <HeaderComponent leftChild={<h1>管理首页</h1>} rightChild={<p>123123</p>} />
      <hr />
    </div>
  );
};

export default Home;
