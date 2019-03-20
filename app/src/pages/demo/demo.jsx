import React from 'react';

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
                <button style={{ color: 'red' }}>click</button>
            </div>
        )
    }
}