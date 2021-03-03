import { getBannerListRequest } from '@src/pages/Home/service/index';
import { get } from 'lodash';
import { HandleGetBannerListOptions } from '@src/pages/Home/service/interface';
import produce from 'immer';

export const handleGetBannerList = async (options: HandleGetBannerListOptions) => {
  const { setState } = options;
  setState(
    produce(draft => {
      draft.loading = true;
    }),
  );
  const res = await getBannerListRequest();
  setState(
    produce(draft => {
      draft.loading = false;
      draft.list = get(res, 'data', []) || [];
    }),
  );
};
