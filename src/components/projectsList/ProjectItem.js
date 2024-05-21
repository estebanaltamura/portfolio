import { useContext, useEffect, useState } from 'react';
import { CurrentProyectSelectedContext } from '../../contexts/CurrentProyectSelectedContextProvider';
import { IsLoadingProjectPreviewContext } from '../../contexts/IsLoadingProjectPreviewContextProvider';
import './ProjectItem.css';

export const ProjectItem = ({ project, name }) => {
  const { currentProyectSelected, setCurrentProyectSelected } = useContext(
    CurrentProyectSelectedContext
  );
  const { setIsLoadingProjectPreview } = useContext(
    IsLoadingProjectPreviewContext
  );

  const [isSelected, setIsSelected] = useState(false);

  const projectSelectedClickHandler = () => {
    if (currentProyectSelected === null) {
      setIsLoadingProjectPreview(true);
      setCurrentProyectSelected({ name: name, project: project });
    } else if (currentProyectSelected.name !== name) {
      setIsLoadingProjectPreview(true);
      setCurrentProyectSelected({ name: name, project: project });
    }
  };

  useEffect(() => {
    if (currentProyectSelected !== null) {
      if (currentProyectSelected.name === name) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    } else {
      setIsSelected(false);
    }
  }, [currentProyectSelected]);

  return (
    <button
      className={isSelected ? 'projectItemActive' : 'projectItem'}
      onClick={projectSelectedClickHandler}
    >
      <span className='itemName'>{name}</span>
    </button>
  );
};
