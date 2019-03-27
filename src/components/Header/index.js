import React from 'react';
import { Row, Col, Avatar, Menu, Dropdown } from 'antd';
import './index.less';

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">个人设置</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出登录</Menu.Item>
    </Menu>
);
export default class Header extends React.Component {

    render() {
        return (
            <div className="header">
                <Row>
                    <Col span={20}></Col>
                    <Col span={4}>
                        <div className='username-wrapper'>
                            <Avatar size={45}>admin</Avatar>
                            <Dropdown overlay={menu}>
                                <span className="ant-dropdown-link" >
                                    admin
                                </span>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
};