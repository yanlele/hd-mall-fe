import { RecoilState, useSetRecoilState, useRecoilState } from 'recoil';
import { CategoryItem, PrimaryCategory } from '@src/pages/Home/service/interface';
import { GetCategoryListRequest, getPrimaryCategoryList } from '@src/pages/Home/service/index';
import { useRequest } from 'ahooks';
import { get, isEmpty } from 'lodash';

// 请求获取 category list 数据
export const useGetCategoryList = (categoryListModel: RecoilState<CategoryItem[]>) => {
  const [list, setCategoryList] = useRecoilState(categoryListModel);
  if (isEmpty(list)) {
    const { data: res } = useRequest(GetCategoryListRequest);
    if (get(res, 'data')) setCategoryList(res.data);
  }
};

// 获取主要分类和分类下面的商品
export const useGetPrimaryCategoryList = (primaryCategoryModel: RecoilState<PrimaryCategory[]>) => {
  const [state, setState] = useRecoilState(primaryCategoryModel);
  if (isEmpty(state)) {
    const { data: res } = useRequest(getPrimaryCategoryList);
    if (get(res, 'data')) setState(res.data);
  }
};
