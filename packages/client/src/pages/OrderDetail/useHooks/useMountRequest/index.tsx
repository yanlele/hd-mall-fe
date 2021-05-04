import { useRecoilValue } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { get } from 'lodash';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { useEffect, useState } from 'react';
import handleMountHelper from '@src/pages/OrderDetail/useHooks/helper/handleMountHelper';

const useMountRequest = () => {
  const { userInfo } = useRecoilValue(userInfoModel);
  const [loading, setLoading] = useState(true);
  const [stateInfo, setStateInfo] = useState({});
  const { id, order_id: orderId } = useGetQuery();

  const defaultAddressId = get(userInfo, 'default_address_id');

  useEffect(() => {
    if (orderId && id && defaultAddressId) {
      setLoading(true);
      handleMountHelper({
        orderId,
        id,
        defaultAddressId,
      })
        .then(res => {
          setStateInfo(res);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [orderId, id, defaultAddressId]);

  return { loading, stateInfo };
};

export default useMountRequest;
