import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";

// Install React Stripe.js - Documentation: https://stripe.com/docs/stripe-js/react
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Public key obtained by registering at stripe.com
// Stripe is used for managing online payments.
const promise = loadStripe(
  "pk_test_51Lo6EJCT83zqzJbQoraf1uoNUUL9FkZwBoxwsepNgLWt9Ac5hLrOQfyFNqXFhuCKDkdCsPIEEiG1aqqEyqrdlKNz00PSqcYFer"
);

function App() {
  const [{}, dispatch] = useStateValue();

  // Now we need to set a listener to Firebase so that our React app 
  // knows that user is authenticated. 
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/Amazon-clone-react"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
