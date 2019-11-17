import React from "react";
import {
	BrowserRouter as Router,
	// Switch,
	Route,
	// Link,
	useParams
} from "react-router-dom";
import Home from "../views/Home/Home.js";
import Detail from "../views/Detail/Detail.js";
const Routes = () => {
	return (
		<Router>
			<Route path='/' component={Home} />
			<Route path='/detail' component={Detail} />
		</Router>
	)
}
export default Routes;

