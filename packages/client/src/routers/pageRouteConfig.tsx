import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

const staticRotes: StaticRoutes[] = [
  {
    path: '/',
    component: pages.Home,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '/list',
    component: pages.List,
    exact: true,
    title: '详情',
    metas: [],
  },
];

export default staticRotes;
