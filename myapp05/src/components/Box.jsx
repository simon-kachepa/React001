import React, {useState} from "react";

export default function Box (props){

    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
      }
      function toggle(id){
        console.log(id)
      }

    return (
        <div 
            className="box-div" 
            style={styles}
            onClick={()=>props.handleClick(props.id)}
        >

            </div>
    )
}