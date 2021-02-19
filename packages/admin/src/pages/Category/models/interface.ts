import { CategoryItem } from '@src/pages/Category/service/interface';

export interface CategoryListModel {
  list: CategoryItem[];
  loading: boolean;
}

export enum CategoryActionType {
  unknown,
  add,
  edit,
}

export interface CategoryModalModel {
  visible: boolean;
  type: CategoryActionType;
  parentId: number;
  modalLoading: boolean;
  item: CategoryItem;
}
