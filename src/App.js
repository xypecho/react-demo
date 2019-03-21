import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';
import './test.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className='test'>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;