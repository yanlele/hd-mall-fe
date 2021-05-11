import pages from './pages';
import { StaticRoutes } from '@src/routers/interface';

const staticRotes: StaticRoutes[] = [
  {
    path: '/',
    component: pages.Home,
    title: '首页配置',
  },
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
  {
    path: '/user',
    component: pages.User,
    title: '管理员信息',
  },
];

export default staticRotes;
