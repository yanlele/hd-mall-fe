import { CategoryItem } from '@src/pages/Category/service/interface';

export interface CategoryListModel {
  list: CategoryItem[];
  loading: boolean;
}
