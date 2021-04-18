import { ClientAddressModalModelState } from '@src/components/biz/AddressModal/model/interface';

export const defaultClientAddressModalModelState: ClientAddressModalModelState = {
  visible: false,
  type: 'add',
  title: '添加地址',
  submitLoading: false,
  addressInfo: {},
  actions: {
    onSubmit: () => Promise.resolve(),
  },
};
