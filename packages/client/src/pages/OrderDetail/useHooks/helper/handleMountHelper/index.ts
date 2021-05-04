import { HandleMountHelperOptions } from '@src/pages/OrderDetail/useHooks/helper/handleMountHelper/interface';
import { getAddressByIdRequest, getDetailListByTempOrderIdRequest, getOrderDetailRequest } from '@src/service';
import { get } from 'lodash';

const handleMountHelper = async (options: HandleMountHelperOptions) => {
  const { id, orderId, defaultAddressId } = options;

  try {
    const [orderDetailRes, productListRes, currentAddressRes] = await Promise.all([
      getOrderDetailRequest(id),
      getDetailListByTempOrderIdRequest(orderId),
      getAddressByIdRequest(defaultAddressId),
    ]);

    return {
      orderDetail: get(orderDetailRes, 'data'),
      productList: get(productListRes, 'data'),
      address: get(currentAddressRes, 'data'),
    };
  } catch (e) {
    return new Error('请求失败');
  }
};

export default handleMountHelper;
