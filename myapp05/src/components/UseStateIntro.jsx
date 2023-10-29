import './App.css';
import React, {useState} from "react";

function UseStateIntro() {
  const [isImportant, setIsImportant] = useState("No")

  function handleClick(){
    setIsImportant("Yes")
  }

  return (
    <div className="usestateintro">
      <h1>Is state important to know?</h1>
      <div className="container" onClick={handleClick}>
        <h1 className="truethness">{isImportant}</h1>
      </div>
    </div>
  );
}

export default UseStateIntro;