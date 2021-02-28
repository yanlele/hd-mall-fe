import request from '@src/utils/axios';
import { getBannerListApiUrl } from '@hd/common/adminService/consts';

export const getBannerListRequest = () => request({ url: getBannerListApiUrl });
