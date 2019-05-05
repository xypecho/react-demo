import React from 'react';
import menuConfig from '../../config/menuConfig';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { SwitchMenu } from '../../redux/action';
import './index.less';

const SubMenu = Menu.SubMenu;

class NavLeft extends React.Component {
    state = {
        openKeys: ['0'],
        rootSubmenuKeys: []
    };
    handleClick = (item) => {
        const { dispatch } = this.props;
        // dispatch(SwitchMenu());
        console.log(item);
        console.log(item.props.title);
    }
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
            this.setState({ openKeys: ['0'] });
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
                    selectedKeys={['/ui/buttons']}
                    mode="inline"
                    theme="dark"
                    onOpenChange={this.onOpenChange}
                    onClick={this.handleClick}
                >
                    {menuConfig.map((item, key) => {
                        if (item.children && item.children.length > 0) {
                            return (
                                <SubMenu key={key} title={<span><Icon type="mail" /><span>{item.title}</span></span>}>
                                    {item.children.map((v, k) => {
                                        return (
                                            <Menu.Item key={'item' + key + k}>
                                                <NavLink to={v.key}>{v.title}</NavLink>
                                            </Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            )
                        } else {
                            return (
                                <Menu.Item key={key}>
                                    <NavLink to={item.key}>
                                        <Icon type="pie-chart" />
                                        {item.title}
                                    </NavLink>
                                </Menu.Item>
                            )
                        }
                    })}
                </Menu>
            </div>
        );
    }
}
export default connect()(NavLeft);