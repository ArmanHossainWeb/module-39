import { useState } from "react"

export default function Bowler(){
    const [Ball,setBall] = useState(0);
    const [Sixes,setSixes] = useState(0)
    const [NoBalls,setNoBalls]= useState(0);
    const [Over,setOver] = useState(0)

    const handlerNoball = () =>{
        const updatedBall = Ball  ;
        const updatedNoBalls = NoBalls + 1;
        const updatedOver = Over + 1;
        setOver(updatedOver)
        setNoBalls(updatedNoBalls)
        setBall(updatedBall)
    }
    const handlerSingle = () =>{
        const updatedBall = Ball + 1;
        setBall(updatedBall)
    }
    const handlerFour = () =>{
        const updatedBall = Ball + 4;
        setBall(updatedBall)
    }
    const handlerSix = () =>{
        const updatedBall = Ball + 6;
        const updatedSixes = Sixes + 1
        setSixes(updatedSixes)
        setBall(updatedBall)
    }
    const handleOver = () =>{
        if(Sixes === 3){
        alert("over cancel") 
        setSixes(0)
    }
    if(NoBalls === 3){
        alert("over cancel") 
        setNoBalls(0)
    }
    if(Over === 6){
        alert("over")
        setOver(0)
    }
    }   

    handleOver()

    return(
        <div className="bowler">
            <h1>Bowler Name: Arman hossain</h1>
            <h2>score:{Ball}</h2>

            <button className="click" onClick={handlerNoball}>No ball</button>
            <button onClick={handlerSingle}>white Ball</button>
            <button onClick={handlerSingle}>singles</button>
            <button onClick={handlerFour}>Four</button>
            <button onClick={handlerSix}>six</button>
        </div>
    )
}