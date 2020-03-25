import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile/index';
import NewIncident from './pages/NewIncident/index';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Logon}></Route>
                <Route exact path='/register' component={Register}></Route>
                <Route exact path='/profile' component={Profile}></Route>
                <Route exact path='/incidents/new' component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;