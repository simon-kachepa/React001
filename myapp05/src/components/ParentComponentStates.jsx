import './App.css';
import Header from "./components/Header";
import Body from "./components/Body"
import React, {useState} from "react";

function ParentComponentStates() {
  const [user, setUser] = useState("Simon")
  return (
    <div className="App">
      <Header name={user} />
      <Body name={user}/>
    </div>
  );
}

export default ParentComponentStates;