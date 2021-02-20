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
];

export default staticRotes;
