import { HandleMountHelperOptions } from '@src/pages/OrderDetail/useHooks/helper/handleMountHelper/interface';
import { getAddressByIdRequest, getDetailListByTempOrderIdRequest, getOrderDetailRequest } from '@src/service';
import { get } from 'lodash';

const handleMountHelper = async (options: HandleMountHelperOptions) => {
  const { id, orderId } = options;

  try {
    const [orderDetailRes, productListRes] = await Promise.all([
      getOrderDetailRequest(id),
      getDetailListByTempOrderIdRequest(orderId),
    ]);
    const addressId = get(orderDetailRes, 'data.address_id');
    const currentAddressRes = await getAddressByIdRequest(addressId);

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
