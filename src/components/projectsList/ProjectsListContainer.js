import { useContext, useEffect, useRef } from "react";
import { chosenProjectContext } from "../../contexts/ChosenProject";
import { ProjectsList } from "./ProjectsList"
import { BsX } from "react-icons/bs";
import "./ProjectsListContainer.css"

export const ProjectsListContainer = ()=> {
  const {currentProject, setCurrentProject} = useContext(chosenProjectContext)
  const projectsSectionElement = useRef()

  useEffect(()=>{
    const projectsSectionElementPosition = projectsSectionElement.current.getBoundingClientRect().top

    if(currentProject !== null){
      console.log("scrollear x", projectsSectionElementPosition)
      window.scrollBy({
        left: 0,
        top: projectsSectionElementPosition + 280,
        behavior: "smooth"})
    }    
  },[currentProject])
  
  return(       
    <div className="projectListContainer" id="projectListElement" ref={projectsSectionElement}>
      <h2 className="projectsTitle" >Projects</h2>            
      {
        currentProject !== null && <BsX className="closeProjectView" onClick={()=>{setCurrentProject(null)}}/>
      }
      <ProjectsList/>            
    </div>
  )
}