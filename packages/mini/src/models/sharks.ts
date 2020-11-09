import { createModel } from '@rematch/core';
import { RootModel } from '@src/models/interface';
import { delay } from '@src/models/utils';

export const sharks = createModel<RootModel>()({
  state: 0,
  reducers: {
    increment: (state, payload: number) => state + payload,
  },
  effects: (dispatch) => ({
    async incrementAsync(payload: number): Promise<void> {
      await delay(500);
      dispatch.sharks.increment(payload);
    },
  }),
});
