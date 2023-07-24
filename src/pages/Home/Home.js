import { useContext } from 'react';
import { chosenProjectContext } from '../../contexts/ChosenProject';
import { Welcome } from '../../components/Welcome/Welcome.js';
import { ProjectsListContainer } from '../../components/Projects/ProjectsListContainer';
import { PreviewsListContainer } from '../../components/Previews/PreviewsListContainer';
import { ProjectSummary } from '../../components/ProjectSummary/ProjectSummary'; 
import "./Home.css"

export const Home = ()=>{
  const {currentProject} = useContext(chosenProjectContext)

  return(
    <div className="homeContainer">
      <Welcome />
      <ProjectsListContainer />
      {
        currentProject.name !== "" && 
          <>
            <PreviewsListContainer />                                                    
            <ProjectSummary />   
          </>
      }          
    </div>
  )
}