import { RecoilState, useSetRecoilState } from 'recoil';
import { CategoryItem, PrimaryCategory } from '@src/pages/Home/service/interface';
import { GetCategoryListRequest, getPrimaryCategoryList } from '@src/pages/Home/service/index';
import { useRequest } from 'ahooks';
import { get } from 'lodash';

// 请求获取 category list 数据
export const useGetCategoryList = (categoryListModel: RecoilState<CategoryItem[]>) => {
  const setCategoryList = useSetRecoilState(categoryListModel);
  const { data: res } = useRequest(GetCategoryListRequest);
  if (get(res, 'data')) setCategoryList(res.data);
};

export const useGetPrimaryCategoryList = (primaryCategoryModel: RecoilState<PrimaryCategory[]>) => {
  const setState = useSetRecoilState(primaryCategoryModel);
  const { data: res } = useRequest(getPrimaryCategoryList);
  if (get(res, 'data')) setState(res.data);
};
