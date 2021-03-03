import { BannerModalType } from '@src/pages/Home/consts';
import { BannerItem } from '@src/pages/Home/service/interface';

export interface BannerModalModelState {
  visible: boolean;
  type: BannerModalType;
  confirmLoading: boolean;
  item: Partial<BannerItem>;
}

export interface BannerListModelState {
  list: BannerItem[];
  loading: boolean;
}
