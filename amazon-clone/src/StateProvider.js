import React, { createContext, useContext, useReducer } from "react";

// Prepare your data layer 
export const StateContext = createContext();

// Wrap our app so every component can get access to the data layer 
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// Pull info from the data layer
export const useStateValue = () => useContext(StateContext);
