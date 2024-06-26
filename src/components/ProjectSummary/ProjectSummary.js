import { useRef, useState, useEffect, useContext } from 'react';
import { CurrentProyectSelectedContext } from '../../contexts/CurrentProyectSelectedContextProvider';
import { v4 as randomId } from 'uuid';
import './ProjectSummary.css';

export const ProjectSummary = () => {
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext);
  const [moreLessDetails, setMoreLessDetails] = useState('Mas detalles');
  const moreLessDetailsButtonElement = useRef();

  const moreDetailsClickHandler = () => {
    moreLessDetails === 'Mas detalles'
      ? setMoreLessDetails('Menos detalles')
      : setMoreLessDetails('Mas detalles');
  };

  useEffect(() => {
    setMoreLessDetails('Mas detalles');
    console.log(currentProyectSelected.project.webSiteLink);
  }, [currentProyectSelected]);

  useEffect(() => {
    if (moreLessDetails === 'Menos detalles') {
      const moreLessDetailsButtonElementPosition =
        moreLessDetailsButtonElement.current.getBoundingClientRect().top;

      window.scrollBy({
        left: 0,
        top: moreLessDetailsButtonElementPosition - 80,
        behavior: 'smooth',
      });
    }
  }, [moreLessDetails]);

  return (
    <div className='projectSummaryContainer'>
      <h2 className='projectSummaryTitle'>Resumen</h2>

      <div className='projectSummaryGrid'>
        <p className='projectSummaryName'>{currentProyectSelected.name}</p>

        {currentProyectSelected.project.webSiteLink !== '' && (
          <a
            className='projectSummaryParagraph link viewSiteLink'
            href={currentProyectSelected.project.webSiteLink}
            target='_blank without rel="noreferrer"'
          >
            View site
          </a>
        )}

        {currentProyectSelected.project.gitHubLink !== '' && (
          <a
            className={
              currentProyectSelected.project.gitHubLink === ''
                ? 'hidden'
                : 'projectSummaryParagraph link gitHubLink'
            }
            href={currentProyectSelected.project.gitHubLink}
            target='_blank without rel="noreferrer"'
          >
            Git Hub
          </a>
        )}
      </div>

      <div className='projectSummaryDescriptionContainer'>
        {currentProyectSelected.project.projectSummary.map(
          (sumarryParagraph) => {
            return (
              <p
                className='projectSummaryParagraph projectDescription'
                key={randomId()}
              >
                {sumarryParagraph}
              </p>
            );
          }
        )}
      </div>

      <div className='technologiesGrid'>
        <p className='technologiesTitle'>Tecnologias aplicadas</p>
        {currentProyectSelected.project.technologies.map((technology) => {
          return (
            <div className='technologyContainer' key={randomId()}>
              <img className='technologyIcons' src={technology.iconSrc} />
              <p className='technologiesNames'>{technology.name}</p>
            </div>
          );
        })}
      </div>

      <div
        className='projectDetailsContainer'
        onClick={moreDetailsClickHandler}
        ref={moreLessDetailsButtonElement}
      >
        <div className='moreDetailsContainer'>
          <span className='moreDetailsText'>{moreLessDetails}</span>
        </div>
      </div>

      {moreLessDetails === 'Menos detalles' && (
        <div className='projectSummaryDescriptionContainer'>
          {currentProyectSelected.project.projectDetails.map(
            (projectDetailsParagraph) => {
              return (
                <p
                  className='projectSummaryParagraph projectDescription'
                  key={randomId()}
                >
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
