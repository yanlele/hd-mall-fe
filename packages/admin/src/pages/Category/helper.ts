import { HandleGetCategoryListAsyncHelperOptions } from '@src/pages/Category/interface';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryListModel } from '@src/pages/Category/models/interface';

export const handleGetCategoryListAsyncHelper = async (
  options: HandleGetCategoryListAsyncHelperOptions<CategoryListModel>,
) => {
  const { setState, state } = options;

  setState({ ...state, loading: true });
  const res = await getCategoryListRequest();
  setState({ list: res.data, loading: false });
};
