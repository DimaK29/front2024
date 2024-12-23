import React, { useState } from "react";

function AddShoppingListModal({ onClose, onAdd }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name) {
      const newList = {
        id: Date.now(),
        name,
        owner: "u1",
        members: [],
        items: [],
        archived: false,
      };
      onAdd(newList);
      onClose();
    }
  };

  return (
    <div className="modal">
      <h2>Create Shopping List</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="List name"
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default AddShoppingListModal;
