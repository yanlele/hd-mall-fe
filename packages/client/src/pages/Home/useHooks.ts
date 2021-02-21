import { useEffect, useState } from 'react';
import { handleCountTimeHelper } from '@src/pages/Home/helper';

/**
 * 倒计时绑定
 * @param endDate
 */
export const useBindCountTime = (endDate: Date) => {
  const [isCountDown, setIsCountDown] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now.getTime() > endDate.getTime()) {
      setIsCountDown(true);
      return;
    }
    const timer = setInterval(() => handleCountTimeHelper(endDate), 1000);
    return () => clearInterval(timer);
  }, []);

  return isCountDown;
};
