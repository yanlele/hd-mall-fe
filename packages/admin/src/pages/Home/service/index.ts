import request from '@src/utils/axios';
import {
  getBannerListApiUrl,
  createBannerApiUrl,
  updateBannerApiUrl,
  deleteBannerApiUrl,
} from '@hd/common/adminService/consts';
import { CreateBannerRequestParams, UpdateBannerRequestParams } from '@src/pages/Home/service/interface';

export const getBannerListRequest = () => request({ url: getBannerListApiUrl });

export const deleteBannerRequest = (id: number) => request({ url: deleteBannerApiUrl, method: 'post', data: { id } });

export const CreateBannerRequest = (data: CreateBannerRequestParams) =>
  request({
    method: 'post',
    url: createBannerApiUrl,
    data,
  });

export const updateBannerRequest = (data: UpdateBannerRequestParams) =>
  request({
    method: 'post',
    url: updateBannerApiUrl,
    data,
  });
