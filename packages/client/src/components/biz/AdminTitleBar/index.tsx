import React, { FC } from 'react';
import styles from './style.less';

const AdminTitleBar: FC = props => {
  return <div className={styles.adminTitleBarContainer}>{props.children}</div>;
};

export default AdminTitleBar;
