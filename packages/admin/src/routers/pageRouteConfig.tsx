import pages from './pages';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

/*interface*/
interface StaticRoutes {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  title: string;
  metas?: any[];
}

const staticRotes: StaticRoutes[] = [
  {
    path: '/',
    component: pages.HomeContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '/timer',
    component: pages.Counter,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '',
    component: pages.NoMatchContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
];

export default staticRotes;
