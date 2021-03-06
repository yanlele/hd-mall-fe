import { useEffect, useState } from 'react';
import { getProductImageRequest } from '@src/pages/Product/service';
import { StaticImage } from '@src/pages/Product/service/interface';

// 获取静态文件
export const useGetStaticImages = (productId: number) => {
  const [list, setList] = useState<StaticImage[]>([]);

  const handleAysncHelper = async () => {
    const res = await getProductImageRequest({ product_id: productId });
    setList(res.data);
  };

  useEffect(() => {
    handleAysncHelper();
  }, []);

  return list;
};
