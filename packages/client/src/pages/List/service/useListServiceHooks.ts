import { useRecoilState } from 'recoil';
import { productListModel } from '@src/pages/List/model';
import { useMount } from 'ahooks';
import { isEmpty, get } from 'lodash';
import { getProductListRequest } from '@src/pages/List/service/index';
import { produce } from 'immer';

export const useGetProductList = () => {
  const [{ list }, setState] = useRecoilState(productListModel);

  useMount(() => {
    if (isEmpty(list)) {
      setState(
        produce(draft => {
          draft.loading = true;
        }),
      );

      getProductListRequest({ page: 1, page_size: 100 })
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
    }
  });
};
