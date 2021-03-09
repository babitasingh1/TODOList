import React from "react";

function ToDoList(props) {
  return (
    <div>
      <ul className="list-group" id="mylist">
        {props.list.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    id="checkbox"
                    checked={item.done}
                    className="formchk-control"
                    aria-label="Checkbox for following text input"
                    onChange={() => {
                      props.onChange(item, index);
                    }}
                  ></input>
                </div>
              </div>
              <input 
                type="text"
                value={item.text}
                className="form-control task"
                aria-label="Text input with checkbox"
                style={{
                  textDecoration: item.done ? "line-through" : "none",
                }}
              ></input>
            </div>
            <button onClick={() => props.onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
