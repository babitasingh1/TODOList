import React,{ useState } from "react";




function ToDoList(props) {
  
  const [checked , setCheck] = useState();

  function handleChange() {
    console.log('clicked');
    setCheck(!checked );
    //console.log('clicked');
    //const box = document.getElementsByClassName('formchk-control');
    //console.log(box);
    //console.log(checkedItem.checked);
    //checkedItem.value = !checkedItem.value;
     //checkedItem.checked = !checkedItem.checked;
  }
   
  
  
  return (
    <div>
      <ul className="list-group" id="mylist">
        {props.list.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input
                    type="checkbox"
                    id = "checkbox"
                    className="formchk-control"
                    aria-label="Checkbox for following text input"
                    checked = {checked}
                    //checked={props.checked}
                    onChange = {handleChange}
                    //onChange={() => props.onChange(item)}
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
            <button onClick={() => props.onDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
