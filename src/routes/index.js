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
const Routes = () => {
	return (
		<div>
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
				</ul>
				<Switch>
					<Route exact path='/' > <Home /> </Route>
					<Route path='/detail' ><Detail /></Route>
					<Route path='/hooks' ><Hooks /></Route>
				</Switch>
			</Router>
		</div>
	)
}
export default Routes;

