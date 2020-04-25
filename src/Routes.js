import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Error from './Error';
import Error404 from './Error404';

export default () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/error">
            <Error />
        </Route>
        <Route>
            <Error404 />
        </Route>
    </Switch>
);
