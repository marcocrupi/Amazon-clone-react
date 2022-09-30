// React Context API
// Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across 
// the entire app (or part of it) lightly and with ease. 
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
