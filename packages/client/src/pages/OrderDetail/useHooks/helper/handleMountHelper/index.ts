import { HandleMountHelperOptions } from '@src/pages/OrderDetail/useHooks/helper/handleMountHelper/interface';
import { getDetailListByTempOrderIdRequest, getOrderDetailRequest } from '@src/service';

const handleMountHelper = async (options: HandleMountHelperOptions) => {
  const { id, orderId } = options;

  const res = await Promise.all([getOrderDetailRequest(id), getDetailListByTempOrderIdRequest(orderId)]);
  console.log(res);
};

export default handleMountHelper;
