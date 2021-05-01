import { useRecoilState } from 'recoil';
import { productListModel } from '@src/pages/List/model';
import { isEmpty, get } from 'lodash';
import { getProductListRequest } from '@src/pages/List/service/index';
import { produce } from 'immer';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';
import { GetProductListRequestParams } from '@src/pages/List/service/interface';

export const useGetProductList = () => {
  const location = useLocation();
  const [{ list }, setState] = useRecoilState(productListModel);

  useEffect(() => {
    const search = parse(location.search);
    const category_id = get(search, 'id') as string;

    setState(
      produce(draft => {
        draft.loading = true;
      }),
    );

    const reqParams: GetProductListRequestParams = { page: 1, page_size: 100 };
    if (category_id) reqParams.category_id = parseInt(category_id, 10);

    getProductListRequest(reqParams)
      .then(res => {
        setState({
          loading: false,
          list: get(res, 'data.list', []),
        });
      })
      .catch(() => {
        setState(
          produce(draft => {
            draft.loading = false;
          }),
        );
      });
  }, [location.search]);
};
