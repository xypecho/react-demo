import React from "react";
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import { HashRouter, Route, Switch } from 'react-router-dom'


export default class MyRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/Admin' component={Admin}></Route>
                </App>
            </HashRouter>
        )
    }
}