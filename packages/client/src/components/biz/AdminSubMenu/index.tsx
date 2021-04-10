import React, { FC, useMemo } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useTitle } from 'ahooks';
import { find, get } from 'lodash';
import staticRotes from '@src/routers/pageRouteConfig';
import { useHistory } from 'react-router';

const AdminSubMenu: FC = () => {
  useTitle('个人中心');
  const history = useHistory();

  const onOpenChange = (value: any) => {
    history.push(`/${get(value, 'key')}`);
  };

  const defaultSelectedKeys = useMemo(() => {
    const pathname = window.location.pathname;
    const currentStateRoute = find(staticRotes, item => pathname === item.path);
    return [get(currentStateRoute, 'path') as string];
  }, [window.location.pathname]);

  return (
    <Menu mode="inline" defaultSelectedKeys={defaultSelectedKeys} style={{ width: 168 }}>
      <Menu.Item onClick={onOpenChange} key="/admin-my" icon={<MailOutlined />}>
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
