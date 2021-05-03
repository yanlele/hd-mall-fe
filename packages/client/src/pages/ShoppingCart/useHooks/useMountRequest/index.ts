import { useRequest } from 'ahooks';
import { getShoppingCartDetailListRequest } from '@src/service';
import { useState } from 'react';
import { get } from 'lodash';

const useMountRequest = () => {
  const [list, setList] = useState<any[]>([]);
  const useRequestResult = useRequest(() => getShoppingCartDetailListRequest({ type: 2 }), {
    onSuccess: res => {
      setList(get(res, 'data', []));
    },
  });
  return {
    list,
    setList,
    useRequestResult,
  };
};

export default useMountRequest;
