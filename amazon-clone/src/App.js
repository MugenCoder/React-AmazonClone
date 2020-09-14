import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";	
import Checkout from "./Checkout.js";
import Login from "./Login.js";

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Header /> {/* Was a Persisting Header; outside of Switch Route; now contained outside of login */}
						<Checkout />
					</Route>
					<Route path="/"> {/* Default [Home Page] Route must be at bottom */}
						<Header /> {/* Was a Persisting Header; outside of Switch Route; now contained outside of login */}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
