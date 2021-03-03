import request from '@src/utils/axios';
import { getBannerListApiUrl, createBannerApiUrl, deleteBannerApiUrl } from '@hd/common/adminService/consts';
import { CreateBannerRequestParams, UpdateBannerRequestParams } from '@src/pages/Home/service/interface';

export const getBannerListRequest = () => request({ url: getBannerListApiUrl });

export const CreateBannerRequest = (data: CreateBannerRequestParams) =>
  request({
    method: 'post',
    url: createBannerApiUrl,
    data,
  });

export const updateBannerRequest = (data: UpdateBannerRequestParams) =>
  request({
    method: 'post',
    url: deleteBannerApiUrl,
    data,
  });
