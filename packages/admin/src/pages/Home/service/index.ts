import request from '@src/utils/axios';
import { getBannerListApiUrl, createBannerApiUrl } from '@hd/common/adminService/consts';
import { CreateBannerRequestParams } from '@src/pages/Home/service/interface';

export const getBannerListRequest = () => request({ url: getBannerListApiUrl });

export const CreateBannerRequest = (data: CreateBannerRequestParams) =>
  request({
    method: 'post',
    url: createBannerApiUrl,
    data,
  });
