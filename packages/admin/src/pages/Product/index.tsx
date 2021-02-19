import React, { FC } from 'react';
import { ProductProps } from '@src/pages/Product/interface';
import { useTitleSet } from '@src/common/useHooks';
import loginWrapper from '@src/components/HOC/loginWrapper';
import TabContainer from '@src/pages/Product/components/TabContainer';

const Product: FC<ProductProps> = props => {
  useTitleSet('商品配置', props);

  return (
    <div>
      <h1>商品配置</h1>
      <hr />
      <TabContainer />
    </div>
  );
};

export default loginWrapper(Product);
