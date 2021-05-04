import { useRequest } from 'ahooks';
import { getUserInfoRequest } from '@src/service';
import { produce } from 'immer';
import { get } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';
import { BaseOptions } from '@ahooksjs/use-request/lib/types';

const useGetUserInfo = (baseOptions?: BaseOptions<any, any>) => {
  const setUserState = useSetRecoilState(userInfoModel);

  return useRequest(
    getUserInfoRequest,
    Object.assign(
      {
        onSuccess: (res: any) => {
          if (res)
            setUserState(
              produce(draft => {
                draft.userInfo = get(res, 'data');
              }),
            );
        },
      },
      baseOptions,
    ),
  );
};

export default useGetUserInfo;
