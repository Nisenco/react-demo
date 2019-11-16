import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from "../containers/Home/Home.js";
import Detail from "../containers/Detail/Detail.js";
const Routes = (
	<BrowserRouter >
		{/*history={hashHistory}*/}
		<div>
			<Route path='/' component={Home} />
			<Route path='/detail/:id' component={Detail} />
		</div>
	</BrowserRouter>
);
export default Routes;

