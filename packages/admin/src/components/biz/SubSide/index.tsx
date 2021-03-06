import { Menu, Button } from 'antd';
import { map, get } from 'lodash';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import React from 'react';
import { SubSideProps } from '@src/components/biz/SubSide/interface';
import styles from './style.less';
import { withRouter } from 'react-router';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';
import { Path } from 'history';

// const { SubMenu } = Menu;

class SubSide extends React.Component<SubSideProps> {
  state = {
    collapsed: false,
    defaultSelectedKeys: [],
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleRenderMenuItem = () => {
    const list = this.props.pageRouteConfig;
    return map(list, item => {
      return <Menu.Item key={item.path}>{item.title}</Menu.Item>;
    });
  };

  handleOnClick: MenuClickEventHandler = e => {
    if (get(e, 'key')) {
      this.props.history.push(get(e, 'key') as Path);
      this.setState({ defaultSelectedKeys: [window.location.pathname] });
    }
  };

  componentDidMount() {
    this.setState({ defaultSelectedKeys: [window.location.pathname] });
  }

  render() {
    return (
      <div className={styles.subSideContainer}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          onClick={this.handleOnClick}
          selectedKeys={this.state.defaultSelectedKeys}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}>
          {this.handleRenderMenuItem()}

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

export default withRouter(SubSide);
