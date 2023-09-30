import React, { useState } from "react";

export default function Header(){
    const [info, setInfo]=useState({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = ()=>{
        console.log(info);
    }

    // function handleSubmit(){
    //     return (
    //         console.log(info)
    //     );
    // }
    return (
        <>
        <p>Main section</p>
        <div>
            <label >Name:</label>
            <input type="text" onChange={(e)=>{setInfo(e.target.value)}} value={info.name} className="input" />
            <br />
            <br />
            <label >Email:</label>
            <input type="email" onChange={(e)=>{setInfo(e.target.value)}} value={info.email} className="input" />
            <br />
            <br />
            <label >Password:</label>
            <input type="password" onChange={(e)=>{setInfo(e.target.value)}} value={info.password} className="input" />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    );
}