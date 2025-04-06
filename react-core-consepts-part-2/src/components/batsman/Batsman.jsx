import React, { useState } from 'react';

const Batsman = () => {
    const[runs,setRuns] = useState(0);

    const style = {
        border: "1px solid green",
        margin:"10px",
        padding: "10px"
    }
    // sigle run 
    const handelSingle = () =>{
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }
    // four run 
    const handelFour = () =>{
        const updatedRuns = runs + 4;
        setRuns(updatedRuns)
    }
    // six runs  
    const handelSix = () => {
        const updatedRuns = runs + 6;
        setRuns(updatedRuns) 
    }
    return (
        <div style={style}>
            <h3>player: arman hossain</h3>
            {
                runs>50 && <p>your score : 50</p>
            }
            <h4>score: {runs}</h4>
            <button onClick={handelSingle}>single</button>
            <button onClick={handelFour}>four</button>
            <button onClick={handelSix}>six</button>
        </div>
    );
};

export default Batsman;