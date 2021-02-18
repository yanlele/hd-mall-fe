import { createModel, ModelConfig } from '@rematch/core';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryItem } from '@src/pages/Category/service/interface';
import { CategoryModel } from '@src/store/models/categoryModel/interface';
import { defaultCategoryModel } from '@src/store/models/categoryModel/consts';

const categoryModel: ModelConfig<CategoryModel> = {
  state: defaultCategoryModel as CategoryModel,
  reducers: {
    setCategoryList(state: CategoryModel, payload: CategoryItem[]) {
      return {
        ...state,
        list: payload,
      };
    },
  },
  effects: {
    async incrementAsync(payload: any, rootState: any) {
      // 模拟延时
      const res = await getCategoryListRequest();
      this.setCategoryList(res.data as CategoryItem[]);
      console.log(payload);
      console.log(rootState);
    },
  },
};

export default categoryModel;
