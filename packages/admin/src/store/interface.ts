import { CountState } from './models/count';
import { Models, RematchDispatch, RematchRootState } from '@rematch/core';
import { categoryModel } from '@src/store/models/categoryModel';

export interface StateModels {
  count: CountState;
}

export interface RootModel extends Models {
  categoryModel: typeof categoryModel;
}

export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
