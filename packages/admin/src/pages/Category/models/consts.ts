import { CategoryActionType } from '@src/pages/Category/models/interface';

export const categoryModalVisibleModelDefault = {
  visible: false,
  type: CategoryActionType.unknown,
  parentId: '',
  modalLoading: false,
};

export const categoryListModelDefault = {
  loading: false,
  list: [],
};
