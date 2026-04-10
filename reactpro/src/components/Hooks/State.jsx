import { useEffect, useState } from "react";

// var count = 1 
const State = () => {
    const[count, setCount]=useState(0);
    const [refresh,setRefresh]=useState(false)
    useEffect(()=>{
        console.log('_____ i am in useEffect',)

    },[refresh])
    const handleButtonClick = () => {
        setCount(() => count+1);
        // count++;
        console.log('____ count ',count)
    }
    return (
        <>
            <section className="main-div">
                <h1>{count}</h1>
                <button onClick={handleButtonClick} > Increment</button>
            </section>
                <button onClick={()=>{setRefresh(!refresh)}} > Refresh</button>


        </>
    )
}
export default State
