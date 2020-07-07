import React, { Component } from "react";
class ListItem extends Component {
  render() {
    const { items, onDelete } = this.props;
    return (
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => onDelete(items)}
      >
        Delete
      </button>
    );
  }
}

export default ListItem;
