import request from '@src/utils/axios';
import { getAddressListApiUrl } from '@hd/common/service/consts';

export const getAddressListRequest = () => request({ url: getAddressListApiUrl });
