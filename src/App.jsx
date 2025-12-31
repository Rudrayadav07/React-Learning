import React from "react";

const App = () => {
  const profile = [
    { name: "Rudra", age: 21, city: "Indore" },
    { name: "naman", age: 20, city: "Indore" },
    { name: "ashu", age: 25, city: "Indore" },
  ];
 const UpdatedData = profile.map((profile)=>{
  return<li>
     <span>{profile.name}</span> ||
     <small>{ profile.age}</small> || 
    <span>{profile.city}</span>
    </li>;
 });

  return (
    <div>
      <h1>Rendring json</h1>
     <ol>
      {UpdatedData}
     </ol>
    </div>
  );
};

export default App;
