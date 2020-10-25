import React, { useState, useEffect } from "react";
import "./App.css";
import "./Match.css";
import MatchmakerButtons from "./MatchmakerButtons.js";
import Axios from 'axios';

function MatchingCard() {
  
    return( 
      <div className="card" > 
      <p>John Smith</p>
      <p>32</p> 
      <p>Electrician</p> 
        <MatchmakerButtons/>

      </div>
    )

}

export default MatchingCard;
