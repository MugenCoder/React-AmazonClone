import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";	
import Checkout from "./Checkout.js";

function App() {
	return (
		<Router>
			<div className="app">
				<Header /> {/* Persisting Header; outside of Switch Route */}

				<Switch>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/"> {/* Default [Home Page] Route must be at bottom */}
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
