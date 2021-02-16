import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface LoadableComponentConfig {
  loader: any;
  loading: any;
  delay: number;
  render?: any;
}

export interface StaticRoutes {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  title: string;
  metas?: any[];
}

export interface Pages {
  [key: string]: Function;
}

export interface ExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}
