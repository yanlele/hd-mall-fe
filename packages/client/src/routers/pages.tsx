import loadableComponent from './loadableComponent';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Pages {
  [key: string]: Function;
}

interface ExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const pages: Pages = {
  Home: () => import('@src/pages/Home'),
  List: () => import('@src/pages/List'),
  ProductDetail: () => import('@src/pages/ProductDetail'),
  Order: () => import('@src/pages/Order'),
  AdminMy: () => import('@src/pages/AdminMy'),
  ShoppingCart: () => import('@src/pages/ShoppingCart'),
  OrderDetail: () => import('@src/pages/OrderDetail'),
  AdminOrderList: () => import('@src/pages/AdminOrderList'),
  AdminAddress: () => import('@src/pages/AdminAddress'),
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
