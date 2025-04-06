import React, { useState } from "react";

const Numbers = () => {

    const [numbers, setNumbers] = useState(0)

    const handelAdd = () =>{
        const newNumbers = numbers + 1;
        setNumbers(newNumbers)
    }
    const handelRemove = () =>{
        const newNumbers = numbers - 1;
        setNumbers(newNumbers)
    }
    const handelReset = () =>{
        const newNumbers = numbers- numbers;
        setNumbers(newNumbers)
    }

  return (
    <div>
      <h1>numbers:  {numbers} </h1>
      <div>
        <button onClick={handelAdd}>add</button>
        <button onClick={handelRemove}>remove</button>
        <button onClick={handelReset}>reset</button>
      </div>
    </div>
  );
};

export default Numbers;
