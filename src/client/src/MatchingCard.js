import React, { useState, useEffect } from "react";
import "./App.css";
import "./Match.css";
import MatchmakerButtons from "./MatchmakerButtons.js";
import Axios from 'axios';

function MatchingCard() {
  
    return( 
      <div className="card" >
      <p>data.name</p>
      <p>age</p> 
      <p>profession</p> 
        <MatchmakerButtons/>

      </div>
    )

}

export default MatchingCard;
