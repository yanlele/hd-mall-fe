import { atom } from 'recoil';
import { BannerModalModelState } from '@src/pages/Home/model/interface';
import { bannerModalModelDefaultState } from '@src/pages/Home/model/consts';

export const bannerModalModel = atom<BannerModalModelState>({
  key: 'bannerModalModel',
  default: bannerModalModelDefaultState,
});
