import { useState, createContext } from 'react';
import { projectsData } from '../JSONs/JSONprojects';

export const CurrentProyectSelectedContext = createContext();

export const CurrentProyectSelectedContextProvider = (props) => {
  const [currentProyectSelected, setCurrentProyectSelected] = useState({
    name: 'Plumarii',
    project: projectsData[0],
  });

  return (
    <CurrentProyectSelectedContext.Provider
      value={{ currentProyectSelected, setCurrentProyectSelected }}
    >
      {props.children}
    </CurrentProyectSelectedContext.Provider>
  );
};
