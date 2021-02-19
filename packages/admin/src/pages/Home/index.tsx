import React, { FC } from 'react';
import { useTitle } from 'ahooks';

const Home: FC = () => {
  useTitle('首页管理');

  return (
    <div>
      <h1>首页管理</h1>
      <hr />
    </div>
  );
};

export default Home;
