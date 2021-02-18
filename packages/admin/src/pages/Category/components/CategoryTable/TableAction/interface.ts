import { CategoryItem } from '@src/pages/Category/service/interface';
import { Dispatch, SetStateAction } from 'react';

export interface CategoryTableAction {
  categoryItem: CategoryItem;
  setTableKey: Dispatch<SetStateAction<number>>;
  tableKey: number;
}
