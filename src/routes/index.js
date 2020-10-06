import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams
} from "react-router-dom";
import Home from "../views/Home/Home.js";
import Detail from "../views/Detail/Detail.js";
import Hooks from  "../views/Hooks";
import D3 from '../views/D3';
import TestEcharts from '../views/Echart';
import './router.css';
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
				</ul>
				<Switch>
					<Route exact path='/' > <Home /> </Route>
					<Route path='/detail' ><Detail /></Route>
					<Route path='/hooks' ><Hooks /></Route>
					<Route path='/d3' ><D3 /></Route>
					<Route path='/echart' ><TestEcharts /></Route>
				</Switch>
			</Router>
		</div>
	)
}
export default Routes;

