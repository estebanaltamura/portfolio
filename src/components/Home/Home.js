import { useContext } from 'react';
import { chosenProjectContext } from '../contexts/ChosenProject';
import { PreviewsLoadingProvider} from '../contexts/PreviewsLoadingProvider';
import { Welcome } from '../Welcome/Welcome.js';
import { ProjectsListContainer } from '../Projects/ProjectsListContainer';
import { PreviewsListContainer } from '../Previews/PreviewsListContainer';
import { ProjectSummary } from '../ProjectSummary/ProjectSummary'; 
import "./Home.css"

export const Home = ()=>{

    const {currentProject} = useContext(chosenProjectContext)


    return(
        <div className="homeContainer">
            <Welcome />
            <PreviewsLoadingProvider>
                <ProjectsListContainer />
                {
                currentProject.name !== "" && 
                <>
                <PreviewsListContainer />                                                    
                <ProjectSummary />   
                </>
                }
            </PreviewsLoadingProvider>  
        </div>
    )
}