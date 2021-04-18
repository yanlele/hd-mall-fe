import { atom } from 'recoil';
import { defaultClientAddressModalModelState } from '@src/components/biz/AddressModal/model/consts';

export const addressFormModel = atom({
  key: 'addressFormModel',
  default: defaultClientAddressModalModelState,
});
