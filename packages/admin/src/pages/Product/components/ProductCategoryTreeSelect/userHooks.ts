import { useEffect, useState } from 'react';
import { getCategoryListRequest } from '@src/pages/Category/service';
import { CategoryItem } from '@src/pages/Category/service/interface';

export const useGetProductCategoryList = () => {
  const [list, setList] = useState<CategoryItem[]>([]);

  const handleAsyncHelper = async () => {
    const res = await getCategoryListRequest();
    setList(res.data);
  };

  useEffect(() => {
    handleAsyncHelper();
  }, []);

  return { list };
};
