/* ==============================  categoryList - Start ============================== */
import { atom } from 'recoil';
import { CategoryItem } from '@src/pages/Home/service/interface';

export const categoryListModel = atom<CategoryItem[]>({
  key: 'categoryListModel',
  default: [],
});

// export const categoryListSelector = selector<CategoryItem[]>({
//   key: 'categoryListSelector',
//   get: ({ get }) => get(categoryListModel),
//
// });

/* ==============================  categoryList - End   ============================== */
