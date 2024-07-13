import { useState } from "react";
import Output from "./Output";



const Greetings=()=>{
    const [changeText,SetChangeText]=useState(false);
    const handleButtonChange=()=>{
        SetChangeText(true);
    }
    return(
        <div>
            <h1>Hello World!</h1>
     
            {changeText && <Output>good to see you!</Output>}
            {!changeText && <Output>changed</Output>}
        
            <button onClick={()=>handleButtonChange()}>Change Text!</button>

        </div>
    )
}
export default Greetings;