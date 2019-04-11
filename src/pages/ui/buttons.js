import React from 'react';
import { Card, Button } from 'antd';
import './ui.less';

export default class Buttons extends React.Component {
    render() {
        return (
            <div>
                <Card
                    title="基础按钮"
                    style={{ width: '100%' }}
                >
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card
                    size="small"
                    title="Small size card"
                    extra={<a href="#">More</a>}
                    style={{ width: 300 }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }
}