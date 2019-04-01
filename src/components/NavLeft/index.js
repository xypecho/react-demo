import React from 'react';
import menuConfig from '../../config/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less';

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
    state = {
        openKeys: ['0'],
        rootSubmenuKeys: []
    };
    componentWillMount() {
        let arr = [];
        menuConfig.map((item, k) => {
            arr.push(k.toString());
            return arr;
        })
        this.setState({
            rootSubmenuKeys: arr
        })
    }
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys:['0'] });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }
    render() {
        return (
            <div>
                <div id="logo">
                    <img src="/assets/images/logo-ant.svg" alt="" />
                    <h1>后台管理系统</h1>
                </div>
                <Menu
                    defaultSelectedKeys={this.state.openKeys}
                    defaultOpenKeys={this.state.openKeys}
                    mode="inline"
                    theme="dark"
                    // openKeys={this.state.openKeys}
                    onOpenChange={this.onOpenChange}
                >
                    {menuConfig.map((item, key) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <SubMenu key={key} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                                    {item.children.map((v, k) => {
                                        return (
                                            <Menu.Item key={'item' + key + k}>{v.title}</Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={key}>
                                    <Icon type="pie-chart" />
                                    <span>{item.title}</span>
                                </Menu.Item>
                            )
                        }
                    })}
                </Menu>
            </div>
        );
    }
}