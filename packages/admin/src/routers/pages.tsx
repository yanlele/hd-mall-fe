import loadableComponent from './loadableComponent';
import { ExportPages, Pages } from '@src/routers/interface';

const pages: Pages = {
  // HomeContainer: () => import('../pages/HomeContainer'),
  // Counter: () => import('../pages/Counter'),
  // NoMatchContainer: () => import('../pages/NoMatchContainer'),
  Product: () => import('@src/pages/Product'),
  Category: () => import('@src/pages/Category'),
  Home: () => import('@src/pages/Home'),
  User: () => import('@src/pages/User'),
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
