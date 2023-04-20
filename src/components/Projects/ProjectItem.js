
import { useContext, useEffect, useRef } from "react"
import { chosenProjectContext } from "../contexts/ChosenProject"
import "./ProjectItem.css"

export const ProjectItem = ({project, name})=>{

    const {currentProject, setCurrentProject} = useContext(chosenProjectContext)
    const itemElement = useRef()

    const chosenProjectClickHandler = ()=>{
        console.log(name, project)
        setCurrentProject({name: name, project: project})
    }

    useEffect(()=>{
        currentProject.name == name ? itemElement.current.classList.replace("projectItem", "projectItemActive") : itemElement.current.classList.replace("projectItemActive", "projectItem")
    },[currentProject])

    return(
        
            <button className="projectItem" ref={itemElement} onClick={chosenProjectClickHandler} >
                <span className="itemName">
                    {name}
                </span>                
            </button>
            
        
    )
}