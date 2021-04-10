import React, { FC, useMemo } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styles from './style.less';
import { useHistory } from 'react-router';
import { find, get } from 'lodash';
import staticRotes from '@src/routers/pageRouteConfig';

const AdminBreadcrumb: FC = () => {
  const history = useHistory();

  const currentPath = useMemo(() => {
    const pathname = history.location.pathname;
    const currentStateRoute = find(staticRotes, item => pathname === item.path);
    return get(currentStateRoute, 'title');
  }, [history.location.pathname]);

  return (
    <Breadcrumb className={styles.adminBreadcrumbContainer}>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item>{currentPath}</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default AdminBreadcrumb;
