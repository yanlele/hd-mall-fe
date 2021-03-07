import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import pageRouteConfig from './pageRouteConfig';
import { Layout } from 'antd';
import styles from './style.less';
import HeaderComponent from '@src/components/biz/HeaderComponent';
import FooterComponent from '@src/components/biz/FooterComponent';

const { Content } = Layout;

const routes = (
  <Router>
    <ConfigProvider locale={zhCN}>
      <Layout style={{ minHeight: '100vh' }}>
        <HeaderComponent />
        <Content className={styles.content}>
          <Switch>
            <div>
              {pageRouteConfig.map((route, index) => {
                const { path, exact, component, title } = route;
                return <Route key={index} exact={exact} path={path} component={component} title={title} />;
              })}
            </div>
          </Switch>
        </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  </Router>
);

export default routes;
