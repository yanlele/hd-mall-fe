import { StaticRoutes } from '@src/routers/interface';
import { RouteComponentProps } from 'react-router';

export interface SubSideProps extends RouteComponentProps {
  pageRouteConfig: StaticRoutes[];
}
