import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';

// 获取query参数
const useGetQuery = () => {
  const location = useLocation();
  const { search } = location;

  const [query, setQuery] = useState<any>(parse(decodeURIComponent(search)));

  useEffect(() => {
    const searchQuery = parse(decodeURIComponent(search));
    setQuery(searchQuery);
  }, [location.search]);

  return query;
};

export default useGetQuery;
