import { useContext, useEffect, useRef } from "react";
import { CurrentProyectSelectedContext } from "../../contexts/CurrentProyectSelectedContextProvider";
import { ProjectsList } from "./ProjectsList"
import { BsX } from "react-icons/bs";
import "./ProjectsListContainer.css"

export const ProjectsListContainer = ()=> {
  const { currentProyectSelected, setCurrentProyectSelected } = useContext(CurrentProyectSelectedContext)
  const projectsSectionElement = useRef()

  useEffect(()=>{
    const projectsSectionElementPosition = projectsSectionElement.current.getBoundingClientRect().top

    if(currentProyectSelected !== null){
      console.log("scrollear x", projectsSectionElementPosition)
      window.scrollBy({
        left: 0,
        top: projectsSectionElementPosition + 280, 
        behavior: "smooth"})
    }    
  },[currentProyectSelected])
  
  return(       
    <div className="projectListContainer" id="projectListElement" ref={projectsSectionElement}>
      <h2 className="projectsTitle" >Projects</h2>            
      {
        currentProyectSelected !== null && <BsX className="closeProjectView" onClick={()=>{setCurrentProyectSelected(null)}}/>
      }
      <ProjectsList/>            
    </div>
  )
}