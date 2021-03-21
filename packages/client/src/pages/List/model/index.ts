import { atom } from 'recoil';
import { productListModelState } from '@src/pages/List/model/consts';

/* ==============================  获取商品列表 - Start ============================== */
export const productListModel = atom({
  key: 'productListModelState',
  default: productListModelState,
});
/* ==============================  获取商品列表 - End   ============================== */
