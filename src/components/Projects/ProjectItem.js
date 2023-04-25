
import { useContext, useEffect, useRef } from "react"
import { chosenProjectContext } from "../contexts/ChosenProject"
import { isLoadingPreviewVideosContext } from "../contexts/IsLoadingPreviewVideosProvider"
import "./ProjectItem.css"

export const ProjectItem = ({project, name})=>{

    const {currentProject, setCurrentProject} = useContext(chosenProjectContext)
    const {setIsLoadingPreviewVideos} = useContext(isLoadingPreviewVideosContext)
    const itemElement = useRef()
    
    const chosenProjectClickHandler = ()=>{
        setCurrentProject({name: name, project: project})   
        currentProject.name == name ? itemElement.current.classList.replace("projectItem", "projectItemActive") : itemElement.current.classList.replace("projectItemActive", "projectItem")
        setIsLoadingPreviewVideos(true)
    }

    useEffect(()=>{
         
    },[currentProject])

    useEffect(()=>{
         
    },[name])

    return(
        
            <button className="projectItem" ref={itemElement} onClick={chosenProjectClickHandler} >
                <span className="itemName">
                    {name}
                </span>                
            </button>
            
        
    )
}