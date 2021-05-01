import { NamePath } from 'rc-field-form/es/interface';

export interface ClientAddressModalModelState {
  visible: boolean;
  type: 'edit' | 'add';
  submitLoading: boolean;
  addressInfo: any; // 表单框的内容
  actions: {
    onSubmit: () => Promise<any>;
    resetFields: (fields?: NamePath[]) => void;
  }; // 出发方法
  title: string;
}
