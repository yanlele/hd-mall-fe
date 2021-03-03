import { BannerModalType } from '@src/pages/Home/consts';

export interface BannerModalModelState {
  visible: boolean;
  type: BannerModalType;
  confirmLoading: boolean;
  backFill: {
    link: string;
    url: string;
  };
}
