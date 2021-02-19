import { HandleGetCategoryListAsyncHelperOptions } from '@src/pages/Category/interface';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryListModel } from '@src/pages/Category/models/interface';
import { map } from 'lodash';

export const handleGetCategoryListAsyncHelper = async (
  options: HandleGetCategoryListAsyncHelperOptions<CategoryListModel>,
) => {
  const { setState } = options;

  setState({ loading: true });
  const res = await getCategoryListRequest();
  const list = map(res.data, item => ({ ...item, key: item.id }));
  setState({ list, loading: false });
};
