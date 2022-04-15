import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import React, { useState } from 'react'

function App() {
  //Stores current VIN from User
  const [currVIN, setCurrVIN] = useState(0);
  return (
    <div className="App">
      <Header />
      <Home 
      setCurrVIN
      />
    </div>
  );
}

export default App;
