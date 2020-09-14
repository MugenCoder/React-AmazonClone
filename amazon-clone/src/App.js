import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";	
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
	const [{}, dispatch] = useStateValue();

	// initialize a listener to keep track of who is signed in
	useEffect(() => { // acts like a dynamic IF statement in Reacr
		auth.onAuthStateChanged((authUser) => {  // as soon as the app loads this listener is ALWAYS listening and will fire whether login/logout
		console.log('THE USER IS >>>', authUser);

		if (authUser) {
			// the user just logged in OR user was logged in
			dispatch({ 	// will shoot the user into the data layer; firebase user's credentials
				type: 'SET_USER', 
				user: authUser	  	
			});
		} else {
			// the user is logged out
			dispatch({	// will eradicate from data layer and set to null; no one is logged in
				type: 'SET_USER',
				user: null
			});
		}
		})
	}, []) // passing an empty arr will make sure it's only run once when the app component loads

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
