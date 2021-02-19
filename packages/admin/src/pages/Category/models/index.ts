import { atom, selector } from 'recoil';
import { CategoryListModel, CategoryModalModel } from '@src/pages/Category/models/interface';
import { categoryListModelDefault, categoryModalVisibleModelDefault } from '@src/pages/Category/models/consts';

/* ==============================  categoryListModel - End   ============================== */
const categoryListModel = atom<CategoryListModel>({
  key: 'categoryListModel',
  default: categoryListModelDefault,
});

export const categoryListModelSelector = selector<Partial<CategoryListModel>>({
  key: 'categoryListModelSelector',
  get: ({ get }) => get(categoryListModel),
  set: ({ set, get }, newValue) => {
    set(categoryListModel, { ...get(categoryListModel), ...newValue });
  },
});
/* ==============================  categoryListModel - End   ============================== */

/* ==============================  categoryModalVisibleModel - Start ============================== */
const categoryModalVisibleModel = atom<CategoryModalModel>({
  key: 'categoryModalVisibleModel',
  default: categoryModalVisibleModelDefault,
});

export const categoryModalVisibleModelSelector = selector<Partial<CategoryModalModel>>({
  key: 'categoryModalVisibleModelSelector',
  get: ({ get }) => {
    return get(categoryModalVisibleModel);
  },
  set: ({ set, get }, newValue) => {
    set(categoryModalVisibleModel, { ...get(categoryModalVisibleModel), ...newValue });
  },
});
/* ==============================  categoryModalVisibleModel - End   ============================== */
