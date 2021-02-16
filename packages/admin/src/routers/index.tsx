import * as React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
  // HashRouter as Router,
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import pageRouteConfig from './pageRouteConfig';
import SubSide from '@src/components/biz/SubSide';
import styles from './style.less';

const routes = (
  <Router>
    <ConfigProvider locale={zhCN}>
      <div className={styles.appContainer}>
        <SubSide pageRouteConfig={pageRouteConfig} />
        <Switch>
          <div className={styles.content}>
            {pageRouteConfig.map((route, index) => {
              const { path, component } = route;
              return <Route key={index} exact={true} path={path} component={component} />;
            })}

            {/* 默认到商品配置页面 */}
            <Redirect to="/product" />
          </div>
        </Switch>
      </div>
    </ConfigProvider>
  </Router>
);

export default routes;
