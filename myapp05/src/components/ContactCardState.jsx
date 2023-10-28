import './App.css';
import React, {useState} from "react";
import Star from "./components/Star";
// import image from "assets/image.png";
// import empty_icon from "assets/star-empty-icon.png";
// import favourite_icon from "assets/favourite-icon.png";

function App() {
  const [contact, setContact] = useState({
    firstName: "Simon",
    lastName: "Kachepa",
    phone: "+263 77 650 7735",
    email: "kachepasimon@gmail.com",
    isFavourite: true
  })

  function toggleIcon(){
    setContact(prevState => {
      return ({
        ...prevState, isFavourite: !prevState.isFavourite
      })
    })
  }

  return (
    <div className="App">
      <article className="card">
        <img 
          src= "assets/image.png" alt=""
          className="image"
        />
        <Star 
          isFilled = {contact.isFavourite}
          handleClick={toggleIcon}
        />
        <h2 className="full-name">{contact.firstName} {contact.lastName}</h2>
        <p className="phone">{contact.phone}</p>
        <p className="email">{contact.email}</p>
      </article>
    </div>
  );
}

export default App;