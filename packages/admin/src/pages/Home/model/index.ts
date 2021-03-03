import { atom } from 'recoil';
import { BannerListModelState, BannerModalModelState } from '@src/pages/Home/model/interface';
import { bannerListModelDefaultState, bannerModalModelDefaultState } from '@src/pages/Home/model/consts';

export const bannerModalModel = atom<BannerModalModelState>({
  key: 'bannerModalModel',
  default: bannerModalModelDefaultState,
});

export const bannerListModel = atom<BannerListModelState>({
  key: 'bannerListModel',
  default: bannerListModelDefaultState,
});
