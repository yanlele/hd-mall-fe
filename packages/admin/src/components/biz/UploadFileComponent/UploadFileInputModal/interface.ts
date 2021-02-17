import { Dispatch, SetStateAction } from 'react';

export interface UploadFileInputModalProps {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}
