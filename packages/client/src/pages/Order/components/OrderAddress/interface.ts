import { ClientAddressModalModelState } from '@src/components/biz/AddressModal/model/interface';
import { SetterOrUpdater } from 'recoil';

export interface HandleOpenAddressModalHelperOptions {
  params?: Partial<ClientAddressModalModelState>;
  setModalState: SetterOrUpdater<ClientAddressModalModelState>;
}
