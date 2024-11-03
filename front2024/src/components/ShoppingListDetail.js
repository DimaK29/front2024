import React, { useState } from "react";
import { shoppingList } from "../constants/shoppingList";

function ShoppingListDetail() {
  const [list, setList] = useState(shoppingList);

  return (
    <div style={styles.container}>
      <h1>{list.title}</h1>
      <ul>
        {list.items.map((item) => (
          <li key={item.id} style={styles.item}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  item: {
    fontSize: "18px",
    padding: "8px 0",
  },
};

export default ShoppingListDetail;