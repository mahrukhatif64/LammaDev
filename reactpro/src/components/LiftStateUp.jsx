import {useState} from "react";

const LiftStateUp =() => {
    const [inputValue ,setInputValue] = useState("");
    return(
        <>
        <InputComponents inputValue={inputValue} setInputValue={setInputValue}/>
        <DisplayComponenets inputValue={inputValue}/>
        </>
    )
}

const InputComponents=({inputValue,setInputValue}) =>{
    return(
        <>
        <input type="text" placeholder="enter your name"
        value={inputValue}
        onChange={(d)=>setInputValue(d.target.value)}></input>
      
        </>
    )
}
const DisplayComponenets =({inputValue})=>{
    return(
        <p>the current input vale is:{inputValue}</p>
    )
}
export default LiftStateUp

