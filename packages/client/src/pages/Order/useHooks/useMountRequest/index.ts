import { useRequest } from 'ahooks';
import { shoppingCartGetByTempIdRequest } from '@src/service';
import useGetQuery from '@src/common/hooks/useGetQuery';
import { get } from 'lodash';

const useMountRequest = () => {
  const query = useGetQuery();

  return useRequest(() => shoppingCartGetByTempIdRequest(get(query, 'temp_id')));
};

export default useMountRequest;
