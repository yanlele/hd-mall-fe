import React from 'react';
import Loadable from 'react-loadable';
import { LoadableComponentConfig } from '@src/routers/interface';
// const Loadable = require('react-loadable');
const Loading = (props: { error: any }) => {
  const { error } = props;
  if (error) {
    return (
      <div>
        <p>{error.stack ? error.stack : ''}</p>
      </div>
    );
  }
  return <div />;
};

const loadableComponent = (loader: any, render?: any) => {
  const config: LoadableComponentConfig = {
    loader,
    loading: Loading,
    delay: 1000,
  };

  if (render) {
    config.render = render;
  }
  return Loadable(config);
};

export default loadableComponent;
