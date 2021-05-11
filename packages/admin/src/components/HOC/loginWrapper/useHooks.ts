import { useEffect } from 'react';
import { getUserInfoRequest } from '@src/pages/User/service';
import { UseGetUserInfoOptions } from '@src/components/HOC/loginWrapper/interface';
import { useRecoilValue } from 'recoil';
import { userInfoModel } from '@src/common/models/useInfoModel';
import { isEmpty } from 'lodash';

export const useGetUserInfo = (options: UseGetUserInfoOptions) => {
  const { setUserInfo, setAuth } = options;

  const user = useRecoilValue(userInfoModel);

  useEffect(() => {
    if (isEmpty(user)) {
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
    }
  }, [user]);
};
