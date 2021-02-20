import loadableComponent from './loadableComponent';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface Pages {
  [key: string]: Function;
}

interface ExportPages {
  [key: string]: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const pages: Pages = {
  Home: () => import('@src/pages/Home'),
};

const exportPages: ExportPages = {};
Object.keys(pages).forEach((key: string) => {
  exportPages[key] = loadableComponent(pages[key]);
});

export default exportPages;
