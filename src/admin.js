import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';

export default class Admin extends React.Component {
    render() {
        return (
            <Row className='container'>
                <Col span={3} className='nav-left'>
                    <NavLeft></NavLeft>
                </Col>
                <Col className='main' span={21}>
                    <Header>
                    </Header>
                    <Row className='content'>
                        content
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}
