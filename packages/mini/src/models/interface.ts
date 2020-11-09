import { Models } from '@rematch/core';
import questions from '@src/models/questions';
import { dolphins } from '@src/models/dolphins';
import { sharks } from '@src/models/sharks';

export interface RootModel extends Models<RootModel> {
  // @ts-ignore
  dolphins: typeof dolphins;
  // @ts-ignore
  sharks: typeof sharks;
  // @ts-ignore
  questions: typeof questions;
}
