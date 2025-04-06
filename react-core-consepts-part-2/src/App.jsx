import { Suspense } from 'react'
import './App.css'
import Batsman from './components/batsman/Batsman'
import Counter from './components/counter/Counter'
import Users from './components/users/Users'
import Photos from './components/photos/Photos'
import Players from './components/players/Players'
import Numbers from './components/numbers/numbers'
import Text from './components/text/Text'

// const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=> res.json())



// const fetchPhotos = fetch("https://jsonplaceholder.typicode.com/photos")
// .then(res => res.json())


function App() {

  // click funtion 
  // function handelClick() {
  //   console.log("hello");
  // }

  return (
    <>
      
      <h3>Vite + React</h3>
      {/* <button onClick={handelClick()}>click me </button>
      <button>click me </button> */}
  {/* <Counter></Counter> */}
  {/* <Batsman></Batsman> */}


        {/* <Suspense fallback={<p>data loading.....</p>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense> */}

          {/* <Suspense fallback={<p>photos loading</p>}>
            <Photos fetchPhotos={fetchPhotos}></Photos>
          </Suspense> */}

          {/* <Players></Players> */}


          {/* <Numbers></Numbers> */}

            {/* <Text></Text> */}


    
    </>
  )
}

export default App
