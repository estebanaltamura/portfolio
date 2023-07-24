import { useRef, useState, useEffect, useContext } from "react";
import { chosenProjectContext } from "../../contexts/ChosenProject";
import { v4 as randomId } from 'uuid'
import "./ProjectSummary.css";

export const ProjectSummary = () => {
  const { currentProject } = useContext(chosenProjectContext);
  const [ moreLessDetails, setMoreLessDetails ] = useState("More details");  
  const moreLessDetailsButtonElement = useRef()

  const moreDetailsClickHandler = () => {
    moreLessDetails === "More details"
    ? setMoreLessDetails("Less details")
    : setMoreLessDetails("More details");
  };
    
  useEffect(()=>{
    setMoreLessDetails("More details")
  },[currentProject])

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

  // const moreLessDetailsButtonElementPosition = moreLessDetailsButtonElement.current.getBoundingClientRect().top
  // const projectSummaryTitlePosition = projectSummaryTitleElement.current.getBoundingClientRect().top   


  // console.log("va a scrollear: ", moreLessDetailsButtonElementPosition)
  // if (moreLessDetails === "More details") {
  //   window.scrollBy({
  //     left: 0,
  //     top: moreLessDetailsButtonElementPosition,
  //     behavior: "smooth",
  //   });
  // }

  // if(moreLessDetails === "Less details") {
  //   window.scrollBy({
  //     left: 0,
  //     top: projectSummaryTitlePosition - 20,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <div className="projectSummaryContainer">
      <h2 className="projectSummaryTitle">Project summary</h2>

      <div className="projectSummaryGrid">
        <p className="projectSummaryName">{currentProject.name}</p>
        <a
          className="projectSummaryParagraph Link viewSiteLink"
          href={currentProject.project.webSiteLink}
          target="_blank"
        >
          View site
        </a>
        <a
          className="projectSummaryParagraph Link gitHubLink"
          href={currentProject.project.gitHubLink}
          target="_blank"
        >
          Git Hub
        </a>
      </div>

      <div className="projectSummaryDescriptionContainer">
        {currentProject.project.projectSummary.map((sumarryParagraph) => {
          return (
            <p className="projectSummaryParagraph projectDescription" key={randomId()}>
              {sumarryParagraph}
            </p>
          );
        })}
      </div>

      <div className="technologiesGrid">
        <p className="technologiesTitle">Tecnologias aplicadas</p>
        {currentProject.project.technologies.map((technology) => {
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
          {currentProject.project.projectDetails.map(
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
