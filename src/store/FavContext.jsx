import { createContext, useState } from "react";

const FavContext = createContext({
  favItems: [],
  addFavItem: (item) => {},
});
export function FavContextProvider({ children }) {
  const [favs, setFavs] = useState({ items: [] });
  function addFavItem(newItem) {
    const exists = favs.items.some((item) => item.id === newItem.id);
    if (!exists) {
      setFavs((prevFavs) => ({
        ...prevFavs,
        items: [...prevFavs.items, newItem],
      }));
    } else {
      console.log("Already");
    }
  }
  const favContext = {
    favItems: favs.items,
    addFavItem: addFavItem,
  };
  return (
    <FavContext.Provider value={favContext}>{children}</FavContext.Provider>
  );
}
export default FavContext;
