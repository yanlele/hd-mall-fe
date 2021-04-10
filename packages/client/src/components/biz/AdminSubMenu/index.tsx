import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useTitle } from 'ahooks';

const AdminSubMenu: FC = () => {
  useTitle('个人中心');

  const onOpenChange = (keys: any) => {
    console.log(keys);
  };

  return (
    <Menu mode="inline" style={{ width: 256 }}>
      <Menu.Item onClick={onOpenChange} key="sub1" icon={<MailOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub2" icon={<AppstoreOutlined />}>
        我的购物车
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub4" icon={<SettingOutlined />}>
        订单中心
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub5" icon={<SettingOutlined />}>
        收藏
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub6" icon={<SettingOutlined />}>
        地址管理
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub7" icon={<SettingOutlined />}>
        商品评价
      </Menu.Item>
      <Menu.Item onClick={onOpenChange} key="sub8" icon={<SettingOutlined />}>
        个人信息
      </Menu.Item>
    </Menu>
  );
};

export default AdminSubMenu;
