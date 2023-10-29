import './App.css';
import React, { useState } from "react"

function App() {
  const [messages, setMessages] = useState(["a", "c", "d"])

  return (
    <div className="App" >
      {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
    </div>
  );
}

export default App;