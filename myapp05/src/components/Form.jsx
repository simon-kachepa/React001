import React, { useState } from "react";

export default function Form () {
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    console.log(details)

    function handleChange (event){
        setDetails(prevDetails=>{
            return {
                ...prevDetails,
                [event.target.name] : event.target.value
            }})
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange = {handleChange}
                name = "firstName"
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Last Name"
                onChange = {handleChange}
                name = "lastName"
            />
            <br />
            <br />
            <input
                type="email"
                placeholder="example@email.com"
                onChange = {handleChange}
                name = "email"
            />
        </form>
    )
}