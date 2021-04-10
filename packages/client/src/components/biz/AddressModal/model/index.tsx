import { atom } from 'recoil';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';

export const clientAddressModalModel = atom({
  key: 'clientAddressModalModel',
  default: defaultClientAddressModalModelState,
});
