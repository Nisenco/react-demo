import React,{useState} from "react";
import {Button} from "antd";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
	useRouteMatch,
} from "react-router-dom";
import Home from "../views/Home/Home.js";
import Detail from "../views/Detail/Detail.js";
import Hooks from "../views/Hooks";
import TestEcharts from '../views/Echart';
import TestReact from '../views/TestReact';
import Gsap from "../views/Gsap/Gsap.js"

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
	path: '/echart',
	component: TestEcharts,
	key: 'detail'
}, {
	path: '/testReact',
	component: TestReact,
	key: 'detail'
}, {
	path: '/topics',
	component: Topics,
	key: 'detail'
}, {
	path: '/gsap',
	component: Gsap,
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
						<Link to='/echart'> test Echarts</Link>
					</li>
					<li>
						<Link to='/testReact'> test React</Link>
					</li>
					<li>
						<Link to="/topics">Topics</Link>
					</li>
					<li>
						<Link to="/gsap">Gsap</Link>
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

function Topics(props) {
	console.log(props);
	let [num,setNum] = useState(0);
	const changeNumber = ()=>{
		let len = 5;
		for(let i = 0;i<len;i++){
			setTimeout(()=>{
				setNum(i);
				console.log(num);
			},1000)
		}
	}
	return (
	  <div>
		<h2>Topics</h2>
		<h3>{num}</h3>
		<Button onClick={changeNumber}>Number</Button>
	</div>
	);
}
