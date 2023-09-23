import './App.css';
import MySelf from "./MySelf";
import jokesData from "./jokesData";

function App() {
  console.log(jokesData)
  const colors = [
    <h4>Orange</h4>,
    <h4>Red</h4>,
    <h4>Green</h4>,
    <h4>Magenta</h4>,
    <h4>Black</h4>,
    <h4>Blue</h4>,
    <h4>Brown</h4>
  ]
  return (
    <div className="App">
      {colors}
      <MySelf />
    </div>
  );
}

export default App;
