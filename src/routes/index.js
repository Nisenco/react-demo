import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import Home from "../containers/Home/Home.js";
import Detail from "../containers/Detail/Detail.js";
const Routes = (
    <Router >
        {/*history={hashHistory}*/}
        <Route path='/' component={Home}/>
        <Route path='/detail/:id' component={Detail}/>
    </Router>
);
export default Routes;

