import { atom } from 'recoil';
import { CategoryItem } from '@src/pages/Home/service/interface';
/* ==============================  categoryList - Start ============================== */
export const categoryListModel = atom<CategoryItem[]>({
  key: 'categoryListModel',
  default: [],
});
/* ==============================  categoryList - End   ============================== */

/* ==============================  primary category list - Start ============================== */
export const primaryCategoryListModel = atom<any[]>({
  key: 'primaryCategoryListModel',
  default: [],
});
/* ==============================  primary category list - End   ============================== */
