import React, { useState } from "react";

function Display({ list, setList, onHandleSave }) {
  //const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const handleEdit=(id)=>{
   // setEdit(true)
    const updated = list.map((element)=>{
      if(element.id===id){
        const result ={...element, edit:true}
        setId(element.id)
        setName(element.name)
        return result
      }
      else{
        return element
      }
      
    })
    setList(updated)
    console.log("updated")
  }
  return (
    <div>
      {list.map((lst) => (
        <div key={lst.id}>
          {!lst.edit && (
            <div key={lst.id} className="display">
              <p>ID : {lst.id}</p>
              <p>Name: {lst.name}</p>
              <button onClick={()=>handleEdit(lst.id)}>Edit</button>
            </div>
          )}
          {lst.edit && (
            <div className="display">
              <p>ID : {lst.id}</p><br></br>
              <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
              <button onClick={()=>onHandleSave(id,name)}>Save</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Display;
