import { atom } from 'recoil';
import { CategoryListModel } from '@src/pages/Category/models/interface';

export const categoryListModel = atom<CategoryListModel>({
  key: 'categoryListModel',
  default: {
    loading: false,
    list: [],
  },
});

export const categoryModalVisibleModel = atom<boolean>({
  key: 'categoryModalVisibleModel',
  default: false,
});
