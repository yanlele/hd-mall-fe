import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routers from './routers';
import { RecoilRoot } from 'recoil';

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <RecoilRoot>{Component}</RecoilRoot>
    </AppContainer>,
    document.getElementById('app'),
  );

render(routers);

// 热替换代码
if (module.hot) {
  module.hot.accept('./routers', () => {
    const nextRoutes = require('./routers').default;
    render(nextRoutes);
  });
}
