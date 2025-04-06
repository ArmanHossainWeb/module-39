import { use } from "react"



export default function Friends({friendPromisec}){

    const friends = use(friendPromisec)
    console.log(friends);
    return(
        <div className="users">
            <h3>friends:{friends.length} </h3>
        </div>
    )
} 