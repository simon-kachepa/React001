import './App.css';
import React, { useState } from "react"
import boxes from "./components/Boxes"
import Box from "./components/Box"

function App() {
  const [squares, setSquares] = useState(boxes)


  function toggle(id){ 
    setSquares(prevState=>{
      return (prevState.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      }))
    })
    console.log(id)
  }
  
  const boxCard = squares.map(box => (
    <Box 
      key={box.id}
      id={box.id}
      on={box.on}
      handleClick={toggle}
    />
  ))

  return (
    <div className="App" >
      {boxCard}
    </div>
  );
}

export default App;