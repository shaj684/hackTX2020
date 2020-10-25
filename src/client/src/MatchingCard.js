import React, { useState, useEffect } from "react";
import "./App.css";
import "./Match.css";
import MatchmakerButtons from "./MatchmakerButtons.js";
import Axios from 'axios';

function MatchingCard() {

  const [data, setData] = useState();

  const getBestUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  
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
