import { useRequest } from 'ahooks';
import { getDetailRequest } from '@src/pages/ProductDetail/service';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';
import { useSetRecoilState } from 'recoil';
import getDetailInfoModel from '@src/pages/ProductDetail/model/getDetailInfoModel';
import { useEffect } from 'react';
import produce from 'immer';

const useGetDetailInfo = () => {
  const query = useGetQuery();
  const setState = useSetRecoilState(getDetailInfoModel);

  const { loading } = useRequest(() => getDetailRequest(get(query, 'id')), {
    onSuccess: res => {
      setState(
        produce(draft => {
          draft.detail = res.data;
        }),
      );
    },
  });

  useEffect(() => {
    setState(
      produce(draft => {
        draft.loading = loading;
      }),
    );
  }, [loading]);
};

export default useGetDetailInfo;
