import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { parse } from 'query-string';

// 获取query参数
const useGetQuery = () => {
  const [query, setQuery] = useState({});
  const location = useLocation();
  const { search } = location;

  useEffect(() => {
    const searchQuery = parse(search);
    setQuery(searchQuery);
  }, [location.search]);

  return query;
};

export default useGetQuery;
