import { SetterOrUpdater } from 'recoil';
import { BannerListModelState } from '@src/pages/Home/model/interface';

export interface BannerItem {
  id: number;
  product_id: number;
  type: number;
  file_name: string;
  url: string;
  link: string;
}

export interface CreateBannerRequestParams {
  type: number;
  file_name: string;
  url: string;
  link: string;
}

export interface UpdateBannerRequestParams extends CreateBannerRequestParams {
  id: number;
}

export interface HandleGetBannerListOptions {
  setState: SetterOrUpdater<BannerListModelState>;
}
