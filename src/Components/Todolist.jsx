import React from "react";
import Listitem from "./Listitem";

function ToDoList(props) {
  return (
    <div>
      <ul className="list-group">
        {props.list.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    aria-label="Checkbox for following text input"
                  ></input>
                </div>
              </div>
              <input
                type="text"
                value={item}
                className="form-control"
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
