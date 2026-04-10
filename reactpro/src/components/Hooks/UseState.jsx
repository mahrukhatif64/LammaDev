import {useState} from "react";
 
const Counter =() =>{
    const [count, setCount] = useState(0);
    return(
        <div className="container state-container">
            <h1>usestate challenge</h1>
            <p>
                Count : <span>{count}</span>
            </p>
            <div>
                <label>
                    step:
                    <input type="submit" />
                </label>
            </div>
        
        </div>
    )


}