import React, { useState, useEffect } from "react";
import logo from "./react-logo.svg";
import nodejsLogo from "./nodejs-logo.svg";
import "./App.css";
import Test from "./NavBar/Navbar"
import Navbar from "./NavBar/Navbar";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    // Specify how to clean up after this effect:
    return () => {};
  }, []); // empty 2nd arg - only runs once

  
    return( 
      <div className="App"> 
      <Navbar /> 
      
      </div>
    )

  


}

export default App;
