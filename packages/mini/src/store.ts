import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import { RootModel } from '@src/models/interface';
import { models } from '@src/models';

export const store = init({
  models,
});

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
