import { atom } from 'recoil';
import { CategoryItem, PrimaryCategory } from '@src/pages/Home/service/interface';
/* ==============================  categoryList - Start ============================== */
export const categoryListModel = atom<CategoryItem[]>({
  key: 'categoryListModel',
  default: [],
});
/* ==============================  categoryList - End   ============================== */

/* ==============================  primary category list - Start ============================== */
export const primaryCategoryListModel = atom<PrimaryCategory[]>({
  key: 'primaryCategoryListModel',
  default: [],
});
/* ==============================  primary category list - End   ============================== */
