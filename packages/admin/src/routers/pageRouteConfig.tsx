import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

const staticRotes: StaticRoutes[] = [
  {
    path: '/product',
    component: pages.Product,
    title: '商品配置',
  },
];

export default staticRotes;
