import './App.css';
import React, {useState} from "react";

function ThingsArrayState() {
const [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"])

function handleClick(){
  setThingsArray(prevThingsArray => {
    return(
      [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    )
  }
    
    )
}

const newThingsArray = thingsArray.map(thing => <p>{thing}</p>)
  return (
    <div className="App">
      <button onClick={handleClick}>Add Thing</button>
      {newThingsArray}
      
    </div>
  );
}

export default ThingsArrayState;
