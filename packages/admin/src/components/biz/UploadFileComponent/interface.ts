import { MutableRefObject } from 'react';
import { FormInstance } from 'antd';

export interface UploadFileComponentProps {
  value?: any[];
  onChange?: any;
  multiple?: boolean;
  formRef: MutableRefObject<FormInstance | undefined>;
}
