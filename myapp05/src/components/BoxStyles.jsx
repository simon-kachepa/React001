import './App.css';
import React, { useState } from "react"
import boxes from "./components/Boxes"

function App() {
  const [squares, setSquares] = useState(boxes)

  // const styles = {
  //   backgroundColor: props.isDarkMode ? "#222222" : "#cccccc"
  // }
  console.log(squares.length)
  
  const styles = {
    backgroundColor: squares.length % 2 === 0 ? "#222222" : "#cccccc"
  }

  const boxCard = squares.map(box => (
    <div className="box-div" key={box.id} style={styles}></div>
  ))

  return (
    <div className="App" >
      {boxCard}
    </div>
  );
}

export default App;