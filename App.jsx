


// import { useEffect, useState } from "react"

// import { useEffect, useState } from "react"

// function App(){
//   const [users, setUsers]=useState([])

//   useEffect(()=>{

//        async function fetchUsers(){
         
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
//         const data = await response.json()
//         setUsers(data)

//        }


//       fetchUsers()
// },[])



//   return(
//     <div>
//       <h1>User Details</h1>
//       <ul>
//         {users.map((item)=><li key={item.id}>
//          UserName: {item.name} -{item.email}

//         </li>)}
//       </ul>

//     </div>
//   )
// }

// export default App;

// import UserCard from "./UserCard";
// import { useState ,useEffect } from "react";


// function App(){
//   const [data ,setData] = useState([])
//   const [isloading ,setIsLoading]= useState(false)
//   const [isError,setIsError]= useState(null)


//  useEffect(()=>{

//   setIsLoading(true)
//   setIsError(null)
//     async function fetchApi(){
//       try{


//     const response = await fetch("https://jsonplaceholder.typicode.com/users")

//     if(!response.ok){
//       throw new Error("Api failed ")
//     }
//     const info = await response.json()


//     setData(info)


//           }
   
 
// catch(error){
//   setIsError(error.message)


// }finally{
//       setIsLoading(false)
//     }

//     }

// fetchApi()

//  },[])


//  return(
//   <div>
//     {isloading && <h1>Loading.........Please wait </h1>}
//     {isError && <h2>{isError}</h2>}

//    {data.map((item) => (
//     <UserCard key={item.id} User={item} />
//    ))}
// </div>
//  )

// }


// export default App;

import UserList from "./UserList"

import { useState ,useEffect} from "react"

function App(){
  const[user,setUser]=useState([])
  const[isLoading,setIsLoading]=useState(true)
  const [iserror ,setIsError]= useState(null)



useEffect(()=>{

async function fetchUsers(){

try{

const response = await fetch(`https://jsonplaceholder.typicode.com/usersBAD`)
if(!response.ok){
  throw new Error("Api failed ")
}
 const data = await response.json()
 setUser(data)
 
} catch(error){
  setIsError(error.message)
  

}finally{
  setIsLoading(false)


}






}
  fetchUsers()
},[])



return(
  <div>
{isLoading && <p>Loading users......</p>}
{iserror && <p className="red">{iserror}</p>}
{!isLoading  && !iserror && (
  <ul>
        {user.map((item) => (
          <UserList key={item.id} User={item} />
        ))}
      </ul>
)}







  </div>
)

}

export default App;
 

