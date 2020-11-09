import { createModel } from '@rematch/core';
import { RootModel } from '@src/models/interface';
import { delay } from '@src/models/utils';

export type DolphinsState = number

export const dolphins = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment: (state: DolphinsState, payload: number) => state + payload,
  },
  effects: (dispatch) => {
    return {
      async incrementAsync(): Promise<void> {
        await delay(500);
        dispatch.dolphins.increment(1);
      },
    };
  },
});
