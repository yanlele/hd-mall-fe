import { RootState } from '@src/store';

export const DemoMapState = (state: RootState) => ({
  dolphins: state.dolphins,
  sharks: state.sharks,
});

