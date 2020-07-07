import React from "react";
function ListItem(props) {
  return (
    <button
      className="btn btn-secondary btn-sm"
      onClick={() => props.onDelete(props.items)}
    >
      Delete
    </button>
  );
}

export default ListItem;
