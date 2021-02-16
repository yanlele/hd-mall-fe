import { Menu, Button } from 'antd';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import { SubSideProps } from '@src/components/biz/SubSide/interface';
import styles from './style.less';

// const { SubMenu } = Menu;

class SubSide extends React.Component<SubSideProps> {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const list = this.props.pageRouteConfig;

    return (
      <div className={styles.subSideContainer}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>

          {/*<SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5" icon={<ContainerOutlined />}>Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>*/}
        </Menu>
      </div>
    );
  }
}

export default SubSide;
