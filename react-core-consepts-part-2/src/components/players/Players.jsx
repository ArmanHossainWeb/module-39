import React, { useEffect, useState } from 'react';

const Players = () => {

const [players,setplayers] =useState([])

useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setplayers(data))
        
},[])

    return (
        <div>
            <h1>hello{players.length}</h1>
            <ol>
            {
                players.map(player => <li>{player.name}</li>)
            }
            </ol>
        </div>
    );
};

export default Players;