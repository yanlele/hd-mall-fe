import { RecoilState, useRecoilState } from 'recoil';
import { CategoryItem, PrimaryCategory } from '@src/pages/Home/service/interface';
import { getPrimaryCategoryList } from '@src/pages/Home/service/index';
import { useMount } from 'ahooks';
import { get, isEmpty } from 'lodash';
import { getCategoryListRequest } from '../../../../../admin/src/pages/Category/service';

// 请求获取 category list 数据
export const useGetCategoryList = (categoryListModel: RecoilState<CategoryItem[]>) => {
  const [list, setCategoryList] = useRecoilState(categoryListModel);

  useMount(() => {
    if (isEmpty(list))
      getCategoryListRequest().then(res => {
        if (get(res, 'data')) setCategoryList(res.data);
      });
  });
};

// 获取主要分类和分类下面的商品
export const useGetPrimaryCategoryList = (primaryCategoryModel: RecoilState<PrimaryCategory[]>) => {
  const [state, setState] = useRecoilState(primaryCategoryModel);

  useMount(() => {
    if (isEmpty(state))
      getPrimaryCategoryList().then(res => {
        if (get(res, 'data')) setState(res.data);
      });
  });
};
