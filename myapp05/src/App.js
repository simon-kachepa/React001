import './App.css';
import React, {useState} from "react";

function App() {
  const [isImportant, setIsImportant] = useState("No")

  function handleClick(){
    setIsImportant("Yes")
  }

  return (
    <div className="App">
      <h1>Is state important to know?</h1>
      <div className="container" onClick={handleClick}>
        <h1 className="truethness">{isImportant}</h1>
      </div>
    </div>
  );
}

export default App;
