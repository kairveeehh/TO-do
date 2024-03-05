import { useState } from "react"

 export function CreateTodo(){

  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
  return <div>
    <input type="text" placeholder = "title" onChange={function(e){
      const value = e.tarrget.value;
      setTitle(e.target.value);
          }}></input>
    <input type="text" placeholder = "description"onChange={function(e){
      const value = e.target.value;
      setDescription(e.target.value);
    }} ></input> <br />

    <button> ADD a todo</button>
  </div>
}