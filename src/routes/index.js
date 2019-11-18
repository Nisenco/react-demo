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
				</ul>
				<Switch>
					<Route path='/' > <Home /> </Route>
					<Route path='/detail' ><Detail /></Route>
				</Switch>
			</Router>
		</div>
	)
}
export default Routes;

