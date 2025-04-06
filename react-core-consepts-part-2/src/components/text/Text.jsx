import React, { useState } from 'react';

const Text = () => {

    const [text, setText] = useState()
    
    const handelShow = () =>{
        setText("hello,react learner")
    }
    const handelHide = () =>{
        setText()
    }

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={handelShow}>show</button>
            <button onClick={handelHide}>hide</button>
        </div>
    );
};

export default Text;