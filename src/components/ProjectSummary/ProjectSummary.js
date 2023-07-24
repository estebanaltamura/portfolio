import { useRef, useState, useEffect, useContext } from "react";
import { CurrentProyectSelectedContext } from "../../contexts/CurrentProyectSelectedContextProvider";
import { v4 as randomId } from 'uuid'
import "./ProjectSummary.css";

export const ProjectSummary = () => {
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext);
  const [ moreLessDetails, setMoreLessDetails ] = useState("More details");  
  const moreLessDetailsButtonElement = useRef()

  const moreDetailsClickHandler = () => {
    moreLessDetails === "More details"
    ? setMoreLessDetails("Less details")
    : setMoreLessDetails("More details");
  };
    
  useEffect(()=>{
    setMoreLessDetails("More details")
  },[currentProyectSelected])

  useEffect(()=>{
    if(moreLessDetails === "Less details"){
      const moreLessDetailsButtonElementPosition = moreLessDetailsButtonElement.current.getBoundingClientRect().top
      
      window.scrollBy({
            left: 0,
            top: moreLessDetailsButtonElementPosition - 80,
            behavior: "smooth",
          });
    }
  },[moreLessDetails])

  return (
    <div className="projectSummaryContainer">
      <h2 className="projectSummaryTitle">Project summary</h2>

      <div className="projectSummaryGrid">
        <p className="projectSummaryName">{currentProyectSelected.name}</p>
        <a
          className="projectSummaryParagraph Link viewSiteLink"
          href={currentProyectSelected.project.webSiteLink}
          target="_blank"
        >
          View site
        </a>
        <a
          className="projectSummaryParagraph Link gitHubLink"
          href={currentProyectSelected.project.gitHubLink}
          target="_blank"
        >
          Git Hub
        </a>
      </div>

      <div className="projectSummaryDescriptionContainer">
        {currentProyectSelected.project.projectSummary.map((sumarryParagraph) => {
          return (
            <p className="projectSummaryParagraph projectDescription" key={randomId()}>
              {sumarryParagraph}
            </p>
          );
        })}
      </div>

      <div className="technologiesGrid">
        <p className="technologiesTitle">Tecnologias aplicadas</p>
        {currentProyectSelected.project.technologies.map((technology) => {
          return (
            <div className="technologyContainer" key={randomId()}>
              <img className="technologyIcons" src={technology.iconSrc} />
              <p className="technologiesNames">{technology.name}</p>
            </div>
          );
        })}
      </div>

      <div
        className="projectDetailsContainer"
        onClick={moreDetailsClickHandler}  
        ref={moreLessDetailsButtonElement}      
      >
        <div className="moreDetailsContainer">
          <span className="moreDetailsText">{moreLessDetails}</span>
        </div>
      </div>

      {moreLessDetails === "Less details" && (
        <div className="projectSummaryDescriptionContainer">
          {currentProyectSelected.project.projectDetails.map(
            (projectDetailsParagraph) => {
              return (
                <p className="projectSummaryParagraph projectDescription" key={randomId()}>
                  {projectDetailsParagraph}
                </p>
              );
            }
          )}
        </div>
      )}
    </div>
  );
};
