import React, { FC } from 'react';
import { Button, Divider, List, Space } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

const BannerImage: FC = () => {
  return (
    <>
      <Space style={{ marginBottom: '6px' }} size="small">
        <Button type="primary">添加</Button>
        <Button>预览</Button>
      </Space>
      <List
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <p>{item}</p>
            <Space split={<Divider type="vertical" />}>
              <Button size="small">修改 </Button>
            </Space>
          </List.Item>
        )}
      />
    </>
  );
};

export default BannerImage;