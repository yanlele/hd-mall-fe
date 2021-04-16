import React, { FC } from 'react';
import { LabelValueProps } from '@src/components/layout/LabelValue/interface';
import cn from 'classnames';
import styles from './style.less';

const LabelValue: FC<LabelValueProps> = props => {
  const { label, value, className } = props;
  return (
    <div className={cn(styles.labelValueContainer, className)}>
      <span className="label">{label}</span>
      <p className="value">{value}</p>
    </div>
  );
};

export default LabelValue;
