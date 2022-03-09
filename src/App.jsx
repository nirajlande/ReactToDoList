import React, { useState } from "react";
import TodoList from "./TodoList";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const App=()=>{

const [inputList,setInputList]= useState("");
const [items,setItems]= useState([]);

const itemEvent=(event)=>{
    setInputList(event.target.value);
}
const listOfItems=()=>{
    setItems((prev)=>{
       return [...prev,inputList];
    })
    setInputList("");
}
const Deleteitem=(id)=>{
   setItems((prev)=>{
      return prev.filter((val,index)=>{
         return index !== id;
      })
   })
}


return (
   <>
      <div className="main_div">
         <div className="center_div">
          <br/>
          <h1>TODO List</h1>
          <br/>
          <div>
          <input type="text" placeholder="add items" onChange={itemEvent}   value={inputList}></input>
          <Fab size="medium" color="secondary" aria-label="add" onClick={listOfItems}>
            <AddIcon />
          </Fab>
          </div>

          <ol>
           {items.map((val,index)=>{
             return <TodoList  
             text ={val}
             id= {index}
             key={index}
             onSelect = {Deleteitem}
             />
           })}
          </ol>

         </div>
      </div>
   </>
)
}

export default App;