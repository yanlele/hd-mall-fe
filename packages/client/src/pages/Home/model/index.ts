/* ==============================  categoryList - Start ============================== */
import { atom } from 'recoil';
import { CategoryItem } from '@src/pages/Home/service/interface';

export const categoryListModel = atom<CategoryItem[]>({
  key: 'categoryListModel',
  default: [],
});
/* ==============================  categoryList - End   ============================== */
