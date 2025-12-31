// import React from "react";

// const App = () => {
//   const profile = [
//     { name: "Rudra", age: 21, city: "Indore" },
//     { name: "naman", age: 20, city: "Indore" },
//     { name: "ashu", age: 25, city: "Indore" },
//   ];
//  const UpdatedData = profile.map((profile)=>{
//   return<li>
//      <span>{profile.name}</span> ||
//      <small>{ profile.age}</small> || 
//     <span>{profile.city}</span>
//     </li>;
//  });

//   return (
//     <div>
//       <h1>Rendring json</h1>
//      <ol>
//       {UpdatedData}
//      </ol>
//     </div>
//   );
// };

// export default App;


// learning usestate hook 
import { useState } from 'react'
const App = () => {
  const[UserName,SetUserName]= useState("Rudra")

  const ChangeUserName = () =>{
    SetUserName("Naman")
  };
  return (
    <div>
      <h1>Learning useState Hook</h1>
       <h2> userName:{UserName}
       </h2>
       <button onClick={ChangeUserName}>Click</button>
    </div>
  )
}

export default App