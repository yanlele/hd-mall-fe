import { useRequest } from 'ahooks';
import { getDetailListByTempOrderIdRequest } from '@src/service';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';

const useMountRequest = () => {
  const query = useGetQuery();

  return useRequest(() => getDetailListByTempOrderIdRequest(get(query, 'temp_order_id')));
};

export default useMountRequest;
