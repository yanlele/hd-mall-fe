import * as React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import pageRouteConfig from './pageRouteConfig';
import { Layout } from 'antd';
import styles from './style.less';
import HeaderComponent from '@src/components/biz/HeaderComponent';

const { Footer, Content } = Layout;

const routes = (
  <Router>
    <ConfigProvider locale={zhCN}>
      <Layout>
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
        <Footer className={styles.footer}>footer</Footer>
      </Layout>
    </ConfigProvider>
  </Router>
);

export default routes;
