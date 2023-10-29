import './App.css';
import React from "react"
import JokesData from "./components/JokesData"
import Joke from "./components/Joke"

function App() {
  const jokesElement = JokesData.map(joke=>{
    return (
      <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
    />
    )
  })
  return (
    <div className="App" >
      {jokesElement}
    </div>
  );
}

export default App;