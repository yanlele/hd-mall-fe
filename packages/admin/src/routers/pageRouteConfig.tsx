import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

const staticRotes: StaticRoutes[] = [
  {
    path: '/product',
    component: pages.Product,
    title: '商品配置',
  },
  {
    path: '/category',
    component: pages.Category,
    title: '商品分类管理',
  },
];

export default staticRotes;
