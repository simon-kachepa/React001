import './App.css';
import React, {useState} from "react";
import image from "./assets/image.png";
import emptyfav from "./assets/star-empty.png";

function ContactCard() {
  const [contact, setContact] = useState({
    firstName: "Simon",
    lastName: "Kachepa",
    phone: "+263 77 650 7735",
    email: "kachepasimon@gmail.com",
    isFavourite: false
  })

  return (
    <div className="App">
      <article className="card">
        <img 
          src={image} 
          className="image"
        />
        <div>
          <img src={emptyfav} />
        </div>
        <h2 className="full-name">{contact.firstName} {contact.lastName}</h2>
        <p className="phone">{contact.phone}</p>
        <p className="email">{contact.email}</p>
      </article>
    </div>
  );
}

export default ContactCard;