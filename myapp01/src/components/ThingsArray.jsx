export default function ThingsArray(){
    const thingsArray = ["Thing 1", "Thing 2"];
    const newThingsArray = thingsArray.map(thing=>
        <p>{thing}</p>
    )
    return(
       <p>{newThingsArray}</p>
    )
}