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
    title: '列表',
    metas: [],
  },
  {
    path: '/detail',
    component: pages.ProductDetail,
    exact: true,
    title: '详情',
  },
  {
    path: '/order',
    component: pages.Order,
    exact: true,
    title: '订单',
  },
  {
    path: '/admin/my',
    component: pages.AdminMy,
    exact: true,
    title: '个人中心',
  },
  {
    path: '/admin/shopping-cart',
    component: pages.ShoppingCart,
    exact: true,
    title: '个人中心 - 购物车',
  },
  {
    path: '/admin/order-detail',
    component: pages.OrderDetail,
    exact: true,
    title: '个人中心 - 订单详情',
  },
  {
    path: '/admin/order-list',
    component: pages.AdminOrderList,
    exact: true,
    title: '个人中心 - 订单列表',
  },
  {
    path: '/admin/address',
    component: pages.AdminAddress,
    exact: true,
    title: '个人中心 - 地址管理',
  },
];

export default staticRotes;
