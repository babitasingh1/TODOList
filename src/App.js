import React, { useState } from "react";
import Todolist from "./Components/Todolist";
import "./App.css";

export default function App() {
  const [listitem, setlistitem] = useState([]);

  function handleSubmit() {
    const inputtext = document.getElementById("userinput");

    if (inputtext.value === "") {
      alert("Please enter a valid value");
    } else if (
      listitem.find(
        (list) => list.text.toLowerCase() === inputtext.value.toLowerCase()
      )
    ) {
      alert("This item is already in your list");
    } else {
      setlistitem([...listitem, { text: inputtext.value, id: Math.random(),done:false }]);
    }

    inputtext.value = "";
  }

  function handleDelete(removedItem) {
    setlistitem(listitem.filter((list) => list.id !== removedItem));
  }

  function handleChange(changedItem, index) {
    const newitem = listitem.slice();
    newitem.splice(index, 1, {
      ...changedItem,
      done: !changedItem.done,
    });
    setlistitem(newitem);
  }

  return (
    <div className="App">
      <h1>ToDoList</h1>
      <h4 className="task">Add your tasks here</h4>
      <input className="mr-1 inputText" type="text" id="userinput"></input>

      <button onClick={handleSubmit} className="btn btn-secondary btn-md addBtn">
        Add
      </button>
      <Todolist
        list={listitem}
        onDelete={handleDelete}
        onChange={handleChange}
      />
    </div>
  );
}
