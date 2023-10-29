import React, { useState } from "react"

export default function Joke(props){
    const [isShown, setIsSHown] = useState(false)

    function toggleIsShown(){
        setIsSHown(prevState => !prevState) 
    }
    return(
        <div>
            <p>Setup:{props.setup}</p>
            {isShown && <p>Punchline: {props.punchline}</p>}
            <button onClick={toggleIsShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
        </div>
    )
}