import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { categoryListModelSelector } from '@src/pages/Category/models';
import { handleGetCategoryListAsyncHelper } from '@src/pages/Category/helper';

export const useGetCategoryList = () => {
  const setState = useSetRecoilState(categoryListModelSelector);

  useEffect(() => {
    handleGetCategoryListAsyncHelper({ setState });
  }, []);
};
