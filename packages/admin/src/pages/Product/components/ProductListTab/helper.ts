import { getProductListRequest } from '@src/pages/Product/service';
import { HandleGetListOptions } from '@src/pages/Product/components/ProductListTab/interface';
import { get, toNumber } from 'lodash';
import queryString from 'query-string';

export const handleGetListHelper = async (options: HandleGetListOptions) => {
  const { category_id } = queryString.parse(window.location.search);
  const { setGetListLoading, setProductList } = options;
  if (setGetListLoading) setGetListLoading(true);
  const res = await getProductListRequest({ category_id: toNumber(category_id), page: 1, page_size: 100 });
  if (setGetListLoading) setGetListLoading(false);
  setProductList(get(res, 'data.list', []));
};
