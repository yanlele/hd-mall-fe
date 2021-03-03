import { BannerModalModelState } from '@src/pages/Home/model/interface';
import { BannerModalType } from '@src/pages/Home/consts';

export const bannerModalModelDefaultState: BannerModalModelState = {
  visible: false,
  type: BannerModalType.unknown,
  backFill: {
    link: '',
    url: '',
  },
};
