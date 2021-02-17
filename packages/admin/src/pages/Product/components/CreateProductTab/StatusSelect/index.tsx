import React, { FC } from 'react';
import { Select } from 'antd';
import { StatusSelectProps } from '@src/pages/Product/components/CreateProductTab/StatusSelect/interface';

const { Option } = Select;

const StatusSelect: FC<StatusSelectProps> = props => {
  return (
    <Select
      value={props.value}
      placeholder="Select a option and change input text above"
      onChange={props.onChange}
      allowClear>
      <Option value={1}>上架</Option>
      <Option value={2}>下架</Option>
    </Select>
  );
};

export default StatusSelect;
