import './App.css';

function SimpleTenaryOperator() {

  const isGoingOut = true

  let answer = isGoingOut === true ? "Yes" : "No"

  return (
    <div className="App">
      <h1>Are you going out tonight?</h1>
      <div className="container" >
        <h1 className="truethness">{answer}</h1>
      </div>
    </div>
  );
}

export default SimpleTenaryOperator;