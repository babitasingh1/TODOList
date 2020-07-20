import React, { useState } from "react";
import Todolist from "./Components/Todolist";
import "./App.css";

export default function App() {
  const [list,  setList] = useState([]);
  //const [checked , setCheck] = useState();

  

  function handleSubmit() {
    const inputtext = document.getElementById("userinput");

    if (inputtext.value === "") {
      alert("Please enter a valid value");
    } else if (
      list.find((list) => list.toLowerCase() === inputtext.value.toLowerCase())
    ) {
      alert("This item is already in your list");
    } else {
      setList(list.concat(inputtext.value));
      //setCheck(checked.concat(false));
    }

    inputtext.value = "";
  }

  function handleDelete(removedItem) {
    console.log(removedItem);

    //const boxes = document.getElementsByClassName("formchk-control");

    const index = list.indexOf(removedItem);
    //const box = boxes[index];

    //const row = box.parentNode;

    //row.remove();
    const ul = document.getElementById("mylist");
    console.log(ul);
    console.log(index);
    console.log(ul.children);
    //ul.children[index].remove();

    setList(list.filter((list) => list !== removedItem));
    //setCheck(checked.splice(index,1));
  }

  //function handleChange(checkedItem) {
    //const index = list.indexOf(checkedItem);
   //checkedItem.checked = !checkedItem.checked;
    //console.log(checkedItem);
    //console.log({a:checked}); 
    //setCheck(checked = !checked );
    //setCheck(!checked );
  //}

  return (
    <div>
      <h1>ToDoList</h1>
      <input type="text" id="userinput"></input>

      <button onClick={handleSubmit} className="btn btn-secondary btn-sm">
        submit
      </button>
      <Todolist
        list={list}
        //checked={checked}
        onDelete={handleDelete}
        //onChange={handleChange}
      />
    </div>
  );
}
