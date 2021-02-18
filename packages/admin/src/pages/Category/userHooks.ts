import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { categoryListModel } from '@src/pages/Category/models';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';

export const useGetCategoryList = () => {
  const [state, setState] = useRecoilState(categoryListModel);

  useEffect(() => {
    handleGetCategoryListAsyncHelper({ state, setState });
  }, []);
};
