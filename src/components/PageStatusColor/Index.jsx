import { createContext, useState, useEffect, useContext } from "react";

const StatusContext = createContext();

export function StatusProvider({ children }) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (isOn) {
      document.body.classList.add("daltonismo");
    } else {
      document.body.classList.remove("daltonismo");
    }
  }, [isOn]);
  return (
    <StatusContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </StatusContext.Provider>
  );
}


export function useStatusColor() {
  return useContext(StatusContext);
}