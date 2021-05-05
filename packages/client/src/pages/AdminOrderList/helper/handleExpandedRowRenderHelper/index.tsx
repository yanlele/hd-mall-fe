import { ExpandedRowRender } from 'rc-table/lib/interface';
import React from 'react';
import ChildrenTable from '@src/pages/AdminOrderList/components/ChildrenTable';

const handleExpandedRowRenderHelper: ExpandedRowRender<any> = record => {
  return <ChildrenTable record={record} />;
};

export default handleExpandedRowRenderHelper;
