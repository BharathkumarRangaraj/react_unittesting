import { useState } from "react";


const Greetings=()=>{
    const [changeText,SetChangeText]=useState(false);
    const handleButtonChange=()=>{
        SetChangeText(true);
    }
    return(
        <div>
            <h1>Hello World!</h1>
            <h2>{!changeText && <p>good to see you!</p>}
            {changeText && <p>changed</p>}</h2>
        
            <button onClick={()=>handleButtonChange()}>Change Text!</button>

        </div>
    )
}
export default Greetings;