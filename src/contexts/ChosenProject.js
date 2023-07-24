import { useState, createContext, useEffect } from "react";

export const chosenProjectContext = createContext();

export const ChosenProjectProvider = (props) => {
  const [currentProject, setCurrentProject] = useState(null);
 

  return (
    <chosenProjectContext.Provider
      value={{ currentProject, setCurrentProject }}
    >
      {props.children}
    </chosenProjectContext.Provider>
  );
};
