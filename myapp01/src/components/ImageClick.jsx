import image from "../assets/pic.png"
import Button from "./Button"
import ThingsArray from "./ThingsArray"

export default function ImageClick (){

    function handleClick(){
        return (
        console.log("You clicked me wooo!")
        );
    }
    function secondHandleClick(){
        return (
        console.log("You clicked me wooo!")
        );
    }
    function handleMouseOver(){
        return (
        console.log("You put mouse over the picture")
        );
    }


    return (
        <>
            <div className="wrapper">
                <img 
                src={image} 
                alt="" 
                className="mypic"
                onMouseOver={handleMouseOver}
                />
                <Button 
                btnTxt = "Click Me"
                clickFunction={handleClick}
                />
                <button onClick={secondHandleClick}>Try me</button>
                <ThingsArray />
            </div>
        </>
    );
}