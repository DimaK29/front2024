const API_BASE_URL = "http://localhost:3000";

export const getShoppingLists = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/shopping-lists`);
    if (!response.ok) {
      throw new Error("Failed to fetch shopping lists");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const addShoppingList = async (newList) => {
  try {
    const response = await fetch(`${API_BASE_URL}/shopping-lists`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newList),
    });
    if (!response.ok) {
      throw new Error("Failed to add shopping list");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteShoppingList = async (listId) => {
  try {
    await fetch(`${API_BASE_URL}/shopping-lists/${listId}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(`Failed to delete shopping list with id ${listId}`, error);
  }
};