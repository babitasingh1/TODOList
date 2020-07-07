import React from "react";
import Listitem from "./Listitem";

function ToDoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.list.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </div>
              </div>
              <input
                type="text"
                value={item}
                class="form-control"
                aria-label="Text input with checkbox"
              ></input>
            </div>

            <Listitem items={item} onDelete={props.onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
