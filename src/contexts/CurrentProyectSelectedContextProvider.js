import { useState, createContext, useEffect } from "react";

export const CurrentProyectSelectedContext = createContext();

export const CurrentProyectSelectedContextProvider = (props) => {
  const [ currentProyectSelected, setCurrentProyectSelected ] = useState(null); 

  return (
    <CurrentProyectSelectedContext.Provider
      value={{ currentProyectSelected, setCurrentProyectSelected }}
    >
      {props.children}
    </CurrentProyectSelectedContext.Provider>
  );
};
