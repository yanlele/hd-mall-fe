import { ReactNode } from 'react';

export interface LabelValueProps {
  label: string | ReactNode;
  value: string | ReactNode;
  className?: string;
}
