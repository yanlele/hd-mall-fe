import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

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
