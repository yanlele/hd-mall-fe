import { useEffect } from 'react';
import { getUserInfoRequest } from '@src/pages/User/service';
import { UseGetUserInfoOptions } from '@src/components/HOC/loginWrapper/interface';

export const useGetUserInfo = (options: UseGetUserInfoOptions) => {
  const { setUserInfo, setAuth } = options;
  useEffect(() => {
    getUserInfoRequest()
      .then(res => {
        setUserInfo(res.data);
        setAuth(true);
      })
      .catch(err => {
        if (err.code === 10002) {
          setAuth(false);
        } else {
          setAuth(true);
        }
      })
      .finally(() => {
        // console.log('finally');
      });
  }, []);
};
