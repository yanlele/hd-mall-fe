import { Dispatch, RootState } from '@src/store';

export const demoMapState = (state: RootState) => ({
  dolphins: state.dolphins,
  sharks: state.sharks,
});

export const demoMapDispatch = (dispatch: Dispatch) => ({
  incrementDolphins: () => dispatch.dolphins.increment(1),
  incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
  incrementSharks: () => dispatch.sharks.increment(1),
  incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
  incrementSharksAsync2: () =>
    dispatch({ type: 'sharks/incrementAsync', payload: 2 }),
});
