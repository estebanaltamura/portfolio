import { useState, createContext } from 'react';

export const chosenProjectContext= createContext()

export const ChosenProjectProvider = (props)=>{

    const [currentProject, setCurrentProject] = useState({name: "", project:{}})

    return(
       
        <chosenProjectContext.Provider value={{currentProject, setCurrentProject}}>
            {props.children}
        </chosenProjectContext.Provider>
           
        
    )
}    