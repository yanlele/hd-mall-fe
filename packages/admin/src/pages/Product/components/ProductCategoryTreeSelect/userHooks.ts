import { useEffect, useState } from 'react';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryItem } from '@src/pages/Category/service/interface';

export const useGetProductCategoryList = (deps?: any[]) => {
  const [list, setList] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAsyncHelper = async () => {
    setLoading(true);
    const res = await getCategoryListRequest();
    setLoading(false);
    setList(res.data);
  };

  const dependencies = deps ? deps : [];

  useEffect(() => {
    handleAsyncHelper();
  }, dependencies);

  return { list, loading };
};
