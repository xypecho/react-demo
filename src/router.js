import React from "react";
import App from './App';
import Login from './pages/login';
import Admin from './admin';
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modals';
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
                            <Switch>
                                <Route path='/ui/buttons' component={Buttons}></Route>
                                <Route path='/ui/modals' component={Modals}></Route>
                                <Route component={NoMatch}></Route>
                            </Switch>
                        </Admin>
                    }></Route>
                </App>
            </HashRouter>
        )
    }
}