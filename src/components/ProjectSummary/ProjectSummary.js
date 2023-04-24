import { useRef, useState, useEffect, useContext } from "react";
import { chosenProjectContext } from "../contexts/ChosenProject";
import "./ProjectSummary.css"

export const ProjectSummary = ()=>{

    const projectSumaryElement= useRef()

    const [moreLessDetails, setMoreLessDetails] = useState("More details")
    const {currentProject} = useContext(chosenProjectContext)

    useEffect(()=>{
        const projectListElementTop = document.getElementById("projectListElement").getBoundingClientRect().top
        
        window.scrollBy({
            left: 0,
            top: projectListElementTop,
            behavior: "smooth",
        })            
    },[currentProject])

 
    useEffect(()=>{
        const projectSumaryElementTop = projectSumaryElement.current.getBoundingClientRect().top
        
            
        if (moreLessDetails == "Less details"){
            window.scrollBy({
                left: 0,
                top: projectSumaryElementTop,
                behavior: "smooth",
            })       
        }
            
    },[moreLessDetails])

    const moreDetailsClickHandler = ()=>{
       moreLessDetails == "More details" ? setMoreLessDetails("Less details") : setMoreLessDetails("More details")    
    } 

    return(
        <div className="projectSummaryContainer" ref={projectSumaryElement} >
            
            <h2 className="projectSummaryTitle">Project summary</h2>
            
            <div className="projectSummaryGrid">
                <p className="projectSummaryName">{currentProject.name}</p>                
                <p className="projectSummaryParagraph shortDescription">Short description: {currentProject.project.shortDescription}</p>
                <a className="projectSummaryParagraph Link viewSiteLink" href={currentProject.project.webSiteLink} target="_blank">View site</a>
                <a className="projectSummaryParagraph Link gitHubLink" href={currentProject.project.gitHubLink} target="_blank">Git Hub</a>             
            </div>

            <div className="projectSummaryDescriptionContainer">
                {
                    currentProject.project.projectSummary.map((sumarryParagraph)=>{
                        return <p className="projectSummaryParagraph projectDescription">{sumarryParagraph}</p>
                    })
                }
             
            </div>


            <div className="projectDetailsContainer" onClick={moreDetailsClickHandler}>
                <div className="moreDetailsContainer" >                
                    <span className="moreDetailsText">{moreLessDetails}</span>                
                </div>
            </div>          
            
            {moreLessDetails == "Less details" &&
                <div className="projectSummaryDescriptionContainer">
                    <div className="technologiesGrid">
                        <p className="technologiesTitle">Tecnologias aplicadas</p>
                        {
                            
                            currentProject.project.technologies.map((technology, index)=>{
                                return (
                                <div className="technologyContainer">
                                    <img className="technologyIcons" src={technology.iconSrc} />
                                    <p className="technologiesNames">{technology.name}</p>
                                </div>
                                )
                                
                            })
                        }
                    </div>

                    {
                    currentProject.project.projectDetails.map((projectDetailsParagraph)=>{
                        return <p className="projectSummaryParagraph projectDescription">{projectDetailsParagraph}</p>
                    })
                    }
                    
                </div>
                      
            }
        </div>
    )
}