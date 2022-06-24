import React, { useState, useContext } from "react";

const myContext = React.createContext();

export const useGlobalContext = () => {
  return useContext(myContext);
};

export default function AppProvider({ children }) {

  const [adding, setAdding] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [removeItem, setRemoveItem] = useState(false)
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [listofItems, setListofItems] = useState([])
  const [item, setItem] = useState({})

  return (
    <myContext.Provider
      value={{
        adding, setAdding,
        updated, setUpdated,
        removeItem, setRemoveItem,
        isSwitchOn, setIsSwitchOn,
        listofItems, setListofItems,
        item, setItem,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
