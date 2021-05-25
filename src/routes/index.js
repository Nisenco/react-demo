import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import Home from "../views/Home/Home.js";
import Detail from "../views/Detail/Detail.js";
import Hooks from "../views/Hooks";
import D3 from '../views/D3';
import TestEcharts from '../views/Echart';
import TestReact from '../views/TestReact';

import './router.css';
const routerAry = [{
	path: '/',
	component: Home,
	exact: true,
	key: 'home'
}, {
	path: '/detail',
	component: Detail,
	key: 'detail'
}, {
	path: '/hooks',
	component: Hooks,
	key: 'hooks'
}, {
	path: '/d3',
	component: D3,
	key: 'd3'
}, {
	path: '/echart',
	component: TestEcharts,
	key: 'detail'
}, {
	path: '/testReact',
	component: TestReact,
	key: 'detail'
}, {
	path: '*',
	component: Home,
	key: 'error'
}]
const renderRouter = (routers) => {
	return routers.map(item => <Route
		path={item.path}
		component={item.component}
		exact={item.exact || ''}
		key={item.key} />
	)
}
const Routes = () => {
	return (
		<div className="router_wraper">
			<Router>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/detail'>Detail</Link>
					</li>
					<li>
						<Link to='/hooks'> test hooks</Link>
					</li>
					<li>
						<Link to='/d3'> test D3 demo</Link>
					</li>
					<li>
						<Link to='/echart'> test Echarts</Link>
					</li>
					<li>
						<Link to='/testReact'> test React</Link>
					</li>
				</ul>
				<Switch>
					{renderRouter(routerAry)}
				</Switch>
			</Router>
		</div>
	)
}
export default Routes;

