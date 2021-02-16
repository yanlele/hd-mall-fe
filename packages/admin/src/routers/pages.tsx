import loadableComponent from './loadableComponent';
import { ExportPages, Pages } from '@src/routers/interface';

const pages: Pages = {
  // HomeContainer: () => import('../pages/HomeContainer'),
  // NoMatchContainer: () => import('../pages/NoMatchContainer'),
  // Counter: () => import('../pages/Counter'),
  Product: () => import('@src/pages/product'),
  Category: () => import('@src/pages/category'),
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
