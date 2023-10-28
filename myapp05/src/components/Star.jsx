import React from "react";

export default function Star (props) {
    let starIcon = props.isFilled ?  "assets/favourite-icon.png" : "assets/star-empty-icon.png";

    return (
        <div>
          <img 
            src={starIcon} className="icon" alt=""
            onClick={props.handleClick}
          />
        </div>
    )
}