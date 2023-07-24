
import { useContext, useEffect, useState } from "react"
import { chosenProjectContext } from "../../contexts/ChosenProject"
import { IsLoadingProjectPreviewContext } from "../../contexts/IsLoadingProjectPreviewContextProvider"
import "./ProjectItem.css"

export const ProjectItem = ({project, name})=>{
  const {currentProject, setCurrentProject}   = useContext(chosenProjectContext)
  const { setIsLoadingProjectPreview }        = useContext(IsLoadingProjectPreviewContext)

  const [ isSelected, setIsSelected ] = useState(false)  
    
  const chosenProjectClickHandler = ()=>{
    setCurrentProject({name: name, project: project})   
    setIsLoadingProjectPreview(true)        
  }

  useEffect(()=>{
    if(currentProject !== null){      
      if(currentProject.name === name){
        setIsSelected(true)
      }
      else{
        setIsSelected(false)
      }     
    }  
    else{setIsSelected(false)}         
  },[currentProject])

  return(        
    <button className={isSelected === true ? "projectItemActive" : "projectItem"} onClick={chosenProjectClickHandler} >
      <span className="itemName">
        {name}
      </span>                
    </button>        
  )
}