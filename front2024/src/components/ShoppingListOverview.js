import React, { useContext, useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import { UserContext } from "../services/UserProvider.js";
import ShoppingListTile from "./ShoppingListTile";
import AddShoppingListModal from "./AddShoppingListModal";
import { getShoppingLists, addShoppingList, deleteShoppingList } from "../services/api";

function ShoppingListOverview() {
  const { loggedInUser } = useContext(UserContext);
  const [shoppingLists, setShoppingLists] = useState([]);
  const [showArchived, setShowArchived] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchShoppingLists = async () => {
      const lists = await getShoppingLists();
      setShoppingLists(lists);
    };
    fetchShoppingLists();
  }, []);

  const handleCreate = async (newList) => {
    const addedList = await addShoppingList(newList);
    if (addedList) {
      setShoppingLists([...shoppingLists, addedList]);
    }
  };

  const handleDelete = async (listId) => {
    await deleteShoppingList(listId);
    setShoppingLists(shoppingLists.filter((list) => list.id !== listId));
  };

  const filteredLists = shoppingLists.filter(
    (list) =>
      (list.owner === loggedInUser || list.members.includes(loggedInUser)) &&
      (showArchived || !list.archived)
  );

  return (
    <div>
      <Toolbar
        handleCreate={() => setShowModal(true)}
        showArchived={showArchived}
        setShowArchived={setShowArchived}
      />
      <div className="list-grid">
        {filteredLists.map((list) => (
          <ShoppingListTile
            key={list.id}
            list={list}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {showModal && (
        <AddShoppingListModal
          onClose={() => setShowModal(false)}
          onAdd={handleCreate}
        />
      )}
    </div>
  );
}

export default ShoppingListOverview;