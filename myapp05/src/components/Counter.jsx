import './App.css';
import React, {useState} from "react";

function Count() {
  const [count, setCount] = useState(0)

  function handleIncrementClick(){
    setCount(prevState=>prevState + 1)
  }
  function handleDecrementClick(){
    setCount(prevState=>prevState - 1)
  }

  return (
    <div className="App">
      <div className="container">
        <button className="decrement" onClick={handleIncrementClick}>+</button>
          <div className="container" >
            <h1 className="truethness">{count}</h1>
        </div>
        <button className="increment" onClick={handleDecrementClick}>-</button>
      </div>
    </div>
  );
}

export default Count;
