import { createContext, useState } from "react";
import { useEffect } from "react";

const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState(
    localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : null
  );

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      {children}
    </ItemContext.Provider>
  );
};
export { ItemContextProvider, ItemContext };
