import React from 'react';
import { Card, Button, Icon, Radio } from 'antd';
import './ui.less';

export default class Buttons extends React.Component {
    state = {
        loading: false,
        iconLoading: false,
        value: 'default',
        size: 'default'
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    closeIconLoading = () => {
        this.setState({ loading: false, iconLoading: false });
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            size: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <Card
                    title="基础按钮"
                    style={{ width: '100%' }}
                    className="card-wrap"
                >
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card
                    title="圆形按钮"
                    style={{ width: '100%' }}
                    className="card-wrap"
                >
                    <Button type="primary" icon='plus'>创建</Button>
                    <Button type="primary" icon='edit'>编辑</Button>
                    <Button type="primary" icon='delete'>删除</Button>
                    <Button type="dashed" shape="circle" icon="search" />
                    <Button shape="circle" icon="search" />
                    <Button type="primary" icon='search'>搜索</Button>
                    <Button type="primary" icon='download'>下载</Button>
                </Card>
                <Card
                    title="loading按钮"
                    style={{ width: '100%' }}
                    className="card-wrap"
                >
                    <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>Click me!</Button>
                    <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me!</Button>
                    <Button shape="circle" loading={this.state.loading} />
                    <Button type="primary" shape="circle" loading={this.state.loading} />
                    <Button type="primary" onClick={this.closeIconLoading}>关闭</Button>
                </Card>
                <Card
                    title='按钮组'
                    style={{ width: '100%', marginBottom: '10px' }}>
                    <Button.Group>
                        <Button type="primary">
                            <Icon type="left" />
                            上一页
                        </Button>
                        <Button type="primary">
                            下一页
                            <Icon type="right" />
                        </Button>
                    </Button.Group>
                </Card>
                <Card
                    title="按钮尺寸"
                    style={{ width: '100%' }}
                    className="card-wrap"
                >
                    < Radio.Group onChange={this.onChange}>
                        <Radio value={'small'}>小</Radio>
                        <Radio value={'default'}>中</Radio>
                        <Radio value={'large'}>大</Radio>
                    </ Radio.Group>
                    <Button type="primary" size={this.state.size}>Primary</Button>
                    <Button size={this.state.size}>Default</Button>
                    <Button type="dashed" size={this.state.size}>Dashed</Button>
                    <Button type="danger" size={this.state.size}>Danger</Button>
                </Card>
            </div>
        );
    }
}