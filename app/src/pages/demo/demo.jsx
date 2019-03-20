import React from 'react';
import Button from 'antd/lib/button';
import './test.less';

export default class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
                <button className='tst' style={{ color: 'red' }}>click</button>
            </div>
        )
    }
}