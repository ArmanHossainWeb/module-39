import { useState } from "react";

export default function Batsman (){
    const [Run, setRun] =  useState(0);
    const [Sixes, setSixes] = useState(0);

    const handleSingles = ()  =>{
        const newRuns = Run + 1;
        setRun(newRuns)
    }
    const handleDouble = () =>{
        const newRuns = Run + 2;
        setRun(newRuns)
    }
    const handleFour = () =>{
        const newRuns = Run + 4;
        setRun(newRuns)
    }
    const handleSix = () => {
        const newRuns = Run + 6;
        const newSixes = Sixes + 1;
        setSixes(newSixes)
        setRun(newRuns)
    } 
    
    return(
        <div className="batsMan">
            <h2>Batsman name: Arman Hossain</h2>
            <h1>score: {Run}</h1>
            {
                Run > 50 && <h3>your score: 50</h3>
            }
            <p>Six: {Sixes}</p>
            <button onClick={handleSingles}>singles</button>
            <button onClick={handleDouble}>double</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}