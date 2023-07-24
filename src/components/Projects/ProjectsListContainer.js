import { useContext } from "react";
import { chosenProjectContext } from "../../contexts/ChosenProject";
import { ProjectsList } from "./ProjectsList"
import { BsX } from "react-icons/bs";
import "./ProjectsListContainer.css"


export const ProjectsListContainer = ()=> {

    const {currentProject, setCurrentProject} = useContext(chosenProjectContext)

    return(       
        <div className="projectListContainer" id="projectListElement">
            <h2 className="projectsTitle" >Projects</h2>            
            {
                currentProject.name !== "" && <BsX className="closeProjectView" onClick={()=>{setCurrentProject({name: "", project: {}})}}/>
            }
            <ProjectsList/>
            
        </div>
    )
}