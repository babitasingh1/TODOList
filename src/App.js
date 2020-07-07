import React, { useState } from "react";
import Todolist from "./Components/Todolist";
import "./App.css";

export default function App() {
  const [list, setList] = useState([]);

  function handleSubmit() {
    const inputtext = document.getElementById("userinput");

    if (inputtext.value === "") {
      alert("Please enter a valid value");
    } else if (list.find((list) => list === inputtext.value)) {
      alert("This item is already in your list");
    } else {
      setList(list.concat(inputtext.value));
    }

    inputtext.value = "";
  }

  function handleDelete(removedItem) {
    setList(list.filter((list) => list !== removedItem));
  }

  return (
    <div>
      <h1>ToDoList</h1>
      <input type="text" id="userinput"></input>

      <button onClick={handleSubmit} className="btn btn-secondary btn-sm">
        submit
      </button>
      <Todolist list={list} onDelete={handleDelete} />
    </div>
  );
}
