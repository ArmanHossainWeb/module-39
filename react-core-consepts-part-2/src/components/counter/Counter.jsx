import React, { useState } from 'react';

const Counter = () => {
    const[count,setCount] = useState(0);

    const handelClick =() =>{
        const newCount = count +1;
        setCount(newCount)
    }

    const Style ={
        border: " 1px solid red",
        margin:"10px",
        padding:"10px"
    }
    return (
        <div style={Style}>
            <h1>Count: {count} </h1>
            <button onClick={handelClick}>add </button>
        </div>
    );
};

export default Counter;