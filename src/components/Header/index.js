import React from 'react';
import axios from '../../axios';
import { Row, Col, Avatar, Menu, Dropdown } from 'antd';
import './index.less';
import { connect } from 'react-redux';


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
class Header extends React.Component {
    test = () => {
        axios.jsonp({ url: 'http://api.map.baidu.com/telematics/v3/weather?location=131&output=json&ak=3p49MVra6urFRGOT9s8UBWr2' }).then(res => {
            console.log(res);
        })
    }
    render() {
        return (
            <div className="header">
                <button style={{ 'display': 'none' }} onClick={this.test}>click</button>
                <Row>
                    <Col span={20}></Col>
                    <Col span={4}>
                        <div className='username-wrapper'>
                            <Avatar size={45}>admin</Avatar>
                            <Dropdown overlay={menu}>
                                <span className="ant-dropdown-link" >
                                    {this.props.menuName}
                                </span>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
};
const mapStatesToProps = state => {
    console.log(state)
    return {
        menuName: state.menuName
    }
}
export default connect(mapStatesToProps)(Header);