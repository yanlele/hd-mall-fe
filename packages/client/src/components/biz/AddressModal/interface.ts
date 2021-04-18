import { RecoilState } from 'recoil';
import { ClientAddressModalModelState } from '@src/components/biz/AddressModal/model/interface';

export interface AddressModalProps {
  model: RecoilState<ClientAddressModalModelState>;
  defaultModelState: ClientAddressModalModelState;
}
