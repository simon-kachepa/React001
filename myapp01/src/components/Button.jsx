export default function Button(props){
console.log(props)

    return (
        <div>
            <button className="btn" onClick={props.clickFunction}>{props.btnTxt}</button>
        </div>
    )
}