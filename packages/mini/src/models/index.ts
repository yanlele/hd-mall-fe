import { Models } from '@rematch/core';
import { dolphins } from './dolphins';
import { sharks } from './sharks';
import questions from './questions';

export interface RootModel extends Models<RootModel> {
  // @ts-ignore
  dolphins: typeof dolphins;
  // @ts-ignore
  sharks: typeof sharks;
  // @ts-ignore
  questions: typeof questions;
}

export const models: RootModel = { dolphins, sharks, questions };
