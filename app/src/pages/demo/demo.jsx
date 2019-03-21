import React from 'react';
import { Button } from 'antd';
import './test.less';

export default class Demo extends React.Component {

    render() {
        return (
            <div>
                <Button type="primary">Button</Button>
                <button className='tst'>click11</button>
            </div>
        )
    }
}