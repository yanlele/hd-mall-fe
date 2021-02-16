import * as React from 'react';
import {
  Route,
  Switch,
  BrowserRouter as Router,
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
        <SubSide />
        <Switch>
          <div className={styles.content}>
            {pageRouteConfig.map((route, index) => {
              const { path, exact, component, title } = route;
              return <Route key={index} exact={exact} path={path} component={component} title={title} />;
            })}
          </div>
        </Switch>
      </div>
    </ConfigProvider>
  </Router>
);

export default routes;
