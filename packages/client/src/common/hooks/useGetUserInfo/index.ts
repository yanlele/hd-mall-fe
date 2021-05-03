import { useRequest } from 'ahooks';
import { getUserInfoRequest } from '@src/service';
import { produce } from 'immer';
import { get } from 'lodash';
import { useSetRecoilState } from 'recoil';
import { userInfoModel } from '@src/components/biz/UserLoginComponent/model';

const useGetUserInfo = () => {
  const setUserState = useSetRecoilState(userInfoModel);

  return useRequest(getUserInfoRequest, {
    onSuccess: res => {
      if (res)
        setUserState(
          produce(draft => {
            draft.userInfo = get(res, 'data');
          }),
        );
    },
  });
};

export default useGetUserInfo;
