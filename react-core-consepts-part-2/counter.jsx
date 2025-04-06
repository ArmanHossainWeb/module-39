import { useState } from "react"

export default function Counter(){
    const[Count,setCount] = useState(0);

    const handleAdd = () =>{
        const newCount = Count + 1;
        setCount(newCount)
    }
    const handleRemove = () =>{
        const newCount = Count - 1;
        setCount(newCount)

    }

    const counterStyle={
        border:"2px solid red"
    }
    return(
        <div style={counterStyle}>
            <h3>count: {Count} </h3>
            
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}