import React from "react";
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/noMatch';
import { HashRouter, Route, Switch } from 'react-router-dom'
import { from } from "rxjs";


export default class MyRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    {/* <Route path='/login' component={Login}></Route> */}
                    <Route path='/' render={() =>
                        <Admin>
                            <Route path='/ui/buttons' component={Buttons}></Route>
                            <Route component={NoMatch}></Route>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}