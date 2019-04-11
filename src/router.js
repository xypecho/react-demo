import React from "react";
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/buttons';
import Test from './pages/test';
import NoMatch from './pages/noMatch';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { from } from "rxjs";


export default class MyRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' render={() =>
                        <Admin>
                            <Route path='/admin/ui/buttons' component={Buttons}></Route>
                            <Route path='/admin/ui/test' component={Test}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}