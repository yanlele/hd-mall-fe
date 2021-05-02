import useGetQuery from '@src/common/hooks/useGetQuery';
import { useHistory, useLocation } from 'react-router';
import { stringify } from 'query-string';
import { omit } from 'lodash';

// 处理 query history
const useHandleQuery = () => {
  const query = useGetQuery();
  const history = useHistory();
  const location = useLocation();

  const handleRemoveQuery = (removeKey: string[]) => {
    const removeResult = omit(query, removeKey);
    history.replace(`${location.pathname}?${stringify(removeResult)}`);
  };

  const handleAddQuery = (params: any) => {
    const addQuery = Object.assign({}, query, params);

    const addQueryString = stringify(addQuery);
    history.replace(`${location.pathname}?${addQueryString}`);
  };

  return { handleRemoveQuery, handleAddQuery };
};

export default useHandleQuery;
