import { Dispatch, SetStateAction } from 'react';
import { UploadFileComponentProps } from '@src/components/biz/UploadFileComponent/interface';

export interface UploadFileInputModalProps extends UploadFileComponentProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
