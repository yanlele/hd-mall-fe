import { useRecoilValue } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { get } from 'lodash';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { useEffect } from 'react';
import handleMountHelper from '@src/pages/OrderDetail/useHooks/helper/handleMountHelper';

const useMountRequest = () => {
  const { userInfo } = useRecoilValue(userInfoModel);
  const { id, order_id: orderId } = useGetQuery();

  const defaultAddressId = get(userInfo, 'default_address_id');

  useEffect(() => {
    if (orderId && id && defaultAddressId) {
      handleMountHelper({
        orderId,
        id,
        defaultAddressId,
      });
    }
  }, [orderId, id, defaultAddressId]);
};

export default useMountRequest;
