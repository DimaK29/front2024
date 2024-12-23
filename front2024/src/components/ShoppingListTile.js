import React from "react";

function ShoppingListTile({ list, onDelete }) {
  return (
    <div className="tile">
      <h2>{list.name}</h2>
      <p>Owner: {list.owner}</p>
      <button onClick={() => onDelete(list.id)}>Delete</button>
    </div>
  );
}

export default ShoppingListTile;