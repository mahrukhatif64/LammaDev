import "./ToggleSwitch.css";
import { useState } from "react";
const ToggleSwitch =() =>  {
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch= ()=>{
        setIsOn(!isOn);
    }
    const checkIsOn = isOn ? "on" : "off";

    const toggleColor={backgroundColor : isOn ? "green" : ""}

    return(


   <div className="toggle-switch" 
   style={toggleColor}
   onClick={handleToggleSwitch}>

    <div className={`switch ${checkIsOn}`}>

        <span className="switch-state">{checkIsOn}</span>
    </div>
   </div>
    )

}
export default ToggleSwitch