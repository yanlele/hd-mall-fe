import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

const staticRotes: StaticRoutes[] = [
  {
    path: '/home',
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
    path: '/product',
    component: pages.Product,
    title: '商品配置',
  },
];

export default staticRotes;
