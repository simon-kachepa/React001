import './App.css';
import React, { useState } from "react"
import boxes from "./components/Boxes"

function App() {
  const [squares, setSquares] = useState(boxes)

  const boxCard = squares.map(box => (
    <div className="box-div" key={box.id}></div>
  ))

  return (
    <div className="App">
      {boxCard}
    </div>
  );
}

export default App;