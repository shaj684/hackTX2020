import React, { useState, useEffect } from "react";
import logo from "./react-logo.svg";
import nodejsLogo from "./nodejs-logo.svg";
import "./App.css";
import {signIn} from "./signIn.js";
import Toolbar from "@material-ui/core/Toolbar";

function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.users));
    // Specify how to clean up after this effect:
    return () => {};
  }, []); // empty 2nd arg - only runs once

  return (
    <div className="App">
     <signIn></signIn>
    </div>
  );
}

export default App;
