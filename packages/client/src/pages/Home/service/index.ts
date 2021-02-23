import { getCategoryListApiUrl } from '@hd/common/service/consts';
import request from '@src/utils/axios';

// 获取分类列表
export const GetCategoryListRequest = () =>
  request({
    url: getCategoryListApiUrl,
  });
