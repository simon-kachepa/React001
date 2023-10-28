import './App.css';
import React, {useState} from "react";

function StateChallenge() {

  const [isGoingOut, setIsGoingOut] = useState(true)

  function handleClick(){
    return (
      setIsGoingOut(prevState => !prevState)
    )
  }


  return (
    <div className="App">
      <h1>Are you going out tonight?</h1>
      <div className="container" onClick={handleClick}>
        <h1 className="truethness">{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}

export default StateChallenge;
