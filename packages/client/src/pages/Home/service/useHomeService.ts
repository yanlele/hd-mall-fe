import { RecoilState, useSetRecoilState } from 'recoil';
import { CategoryItem } from '@src/pages/Home/service/interface';
import { useEffect } from 'react';
import { GetCategoryListRequest } from '@src/pages/Home/service/index';

// 请求获取 category list 数据
export const useGetCategoryList = (categoryListModel: RecoilState<CategoryItem[]>) => {
  const setCategoryList = useSetRecoilState(categoryListModel);
  useEffect(() => {
    GetCategoryListRequest().then(res => {
      setCategoryList(res.data);
    });
  }, []);
};
