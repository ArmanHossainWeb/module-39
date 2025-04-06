import Counter from '../counter'
import Batsman from './batsman'
import './App.css'
import Bowler from './Bowler'
import Users from './user'
import { Suspense } from 'react'
import Friends from './friends'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

// const fetchFriends = async() =>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// }

function App() {

  // const friendPromise = fetchFriends();

  
  // function handelClick(){
  //   alert("i am clicked")
  // }
  // const handelClick3 = ()=>{
  //   alert("clicked 3")
  // }
  // const handelAdd5 = (num) => {
  //   const newNum = num + 5;
  //   alert(newNum)
  // }

  return (
    <>
      
      <h3>Vite + React</h3>


    {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
    <Friends friendPromise={friendPromise}></Friends>
    </Suspense> */}
      
      <Suspense fallback={<h3>loading...</h3>}>
        <Users fetchUsers ={fetchUsers}></Users>
      </Suspense>

       <Batsman></Batsman>



      <Bowler></Bowler> 


      <Counter ></Counter>


      {/* <button onClick={handelClick} >Click Me</button>
      <button onClick={function handelClick2(){
        alert("clicked 2")
      }} >Click Me</button>
    
      <button onClick={handelClick3} >Click Me</button>
       
      <button onClick={()=>alert("clicked 4")} >Click Me</button>

      <button onClick={()=> handelAdd5(10)}>Click add 5</button> */}
    </>
  )
}

export default App
