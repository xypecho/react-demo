import React from 'react';
import menuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    componentDidMount() {
        console.log(menuConfig);
    }
    render() {
        return (
            <div>
                <div id="logo">
                    <img src="/assets/images/logo-ant.svg" alt="" />
                    <h1>后台管理系统</h1>
                </div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>工作台</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>表单页</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>列表页</span>
                    </Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>人员管理</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>权限管理</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}