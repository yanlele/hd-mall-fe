import { CategoryActionType, CategoryModalModel } from '@src/pages/Category/models/interface';

export const categoryModalVisibleModelDefault: CategoryModalModel = {
  visible: false,
  type: CategoryActionType.unknown,
  parentId: 0,
  modalLoading: false,
  item: {
    id: 0,
    name: '',
    children: [],
  },
};

export const categoryListModelDefault = {
  loading: false,
  list: [],
};
