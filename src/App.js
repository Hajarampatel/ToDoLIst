import React, { useState } from "react";
import ToDo from './ToDoList';

function App() {
const [val, setval] = useState('');
const [neww, setnew] = useState([]);
 
 const change = (event)=>{
setval(event.target.value);
 }


 function deletes(id) {
  // setnew(neww.splice(props));

  setnew((oldItem )=> {return oldItem.filter( (arr, index)=> { return index !== id })})

    

 }


  const add = () => {
     setnew((old)=>{
       return [ ...old, val];
     })
     setval('');
  }
  return (
    <>
    <div className="main_div">
     <div className="center_div">
     <div className="head">
      <h1>ToDo List</h1>
      </div>
       <br /><br />
       <div className="down">
      <input onChange={change} value={val} type="text" placeholder="Add a Items" autoFocus />
       <button onClick={add}> + </button>
       {neww.map((valuee, index)=>{ return <ToDo text={valuee} key={index} id={index} del={deletes}  />})}
      </div>
     </div>
    </div>
    </>
  );
}

export default App;
