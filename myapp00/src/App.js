import './App.css';
import React, { useState } from "react"

export default function App (){
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  function handleChange(e){
    const newdata = {...data};
    newdata[e.target.id] = e.target.value;
    setData(newdata)
    console.log(newdata)
  }

  // function handleClick(){
  //   console.log(data.name, data.email,data.password);
  // }

  return (
    <>
    <h1>Hello Hardy</h1>
    <form>
      <input type="text" name="name" onChange={(e)=>handleChange(e)} value={data.name} id="name"/>
      <input type="email" name="email" onChange={(e)=>handleChange(e)} value={data.email} id="email"/>
      <input type="password" name="password" onChange={(e)=>handleChange(e)} value={data.password} id="password"/>
      <button type="submit">submit</button>
    </form>
    </>
  )
}


