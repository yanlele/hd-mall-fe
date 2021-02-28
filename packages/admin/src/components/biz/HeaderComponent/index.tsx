import React, { FC } from 'react';
import { HeaderComponentProps } from '@src/components/biz/HeaderComponent/interface';
import styles from './style.less';

const HeaderComponent: FC<HeaderComponentProps> = props => {
  return (
    <div className={styles.header}>
      <div>{props.leftChild}</div>
      {props.rightChild && <div className="right-container">{props.rightChild}</div>}
    </div>
  );
};

export default HeaderComponent;
