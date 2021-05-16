import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

// store - stores data, think of state
// reducer - function that used to update/ how to do?
// two arguments - state, action
// state - old state/ state before update
// action - what happened/ what update/ what to do? 
// return updated or old state

// -----------------********------------------

// creating a store
import { createStore } from "redux";
// reducer
function reducer() {
  console.log("shake and bake");
}

const store = createStore(reducer);

function App() {
  // cart setup
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
