import { useState } from "react";
import "./App.css";
import Display from "./Components/display";

function App() {
  const handleSave = (id,names) => {
    const update = list.map((element) => {
      if (id === element.id) {
        
        const res = { ...element, id:id,name:names,edit:false };
        return res;
      }
      else{
        return element
      }
    });
    setList(update)
    console.log(list)
  };
  const arr = [
    {
      id: 1,
      name: "Sanjana",
      edit: false,
    },
    {
      id: 2,
      name: "Latha",
      edit: false,
    },
  ];
  const [list, setList] = useState(arr);

  return (
    <div>
      <Display list={list} setList={setList} onHandleSave={(id,names)=>handleSave(id,names)}></Display>
    </div>
  );
}

export default App;
