import React, { FC, useMemo } from 'react';
import { Menu, Affix } from 'antd';
import {
  SettingOutlined,
  EnvironmentOutlined,
  ProfileOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';
import { find, get } from 'lodash';
import staticRotes from '@src/routers/pageRouteConfig';
import { useHistory } from 'react-router';

const AdminSubMenu: FC = () => {
  const history = useHistory();

  const onOpenChange = (value: any) => {
    history.push(`${get(value, 'key')}`);
  };

  const defaultSelectedKeys = useMemo(() => {
    const pathname = window.location.pathname;
    const currentStateRoute = find(staticRotes, item => pathname === item.path);

    document.title = get(currentStateRoute, 'title', '个人中心');

    return [get(currentStateRoute, 'path') as string];
  }, [window.location.pathname]);

  return (
    <Affix>
      <Menu mode="inline" defaultSelectedKeys={defaultSelectedKeys} style={{ width: 168 }}>
        <Menu.Item onClick={onOpenChange} key="/admin/my" icon={<ProfileOutlined />}>
          个人中心
        </Menu.Item>
        <Menu.Item onClick={onOpenChange} key="/admin/shopping-cart" icon={<ShoppingCartOutlined />}>
          我的购物车
        </Menu.Item>
        <Menu.Item onClick={onOpenChange} key="/admin/order-list" icon={<ShoppingOutlined />}>
          订单中心
        </Menu.Item>
        {/*<Menu.Item onClick={onOpenChange} key="sub5" icon={<StarOutlined />}>
          收藏
        </Menu.Item>*/}
        <Menu.Item onClick={onOpenChange} key="/admin/address" icon={<EnvironmentOutlined />}>
          地址管理
        </Menu.Item>
        {/*<Menu.Item onClick={onOpenChange} key="sub7" icon={<SettingOutlined />}>
          商品评价
        </Menu.Item>*/}
        <Menu.Item onClick={onOpenChange} key="sub8" icon={<SettingOutlined />}>
          个人信息
        </Menu.Item>
      </Menu>
    </Affix>
  );
};

export default AdminSubMenu;
