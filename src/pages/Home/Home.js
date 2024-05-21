import { useContext } from 'react';
import { CurrentProyectSelectedContext } from '../../contexts/CurrentProyectSelectedContextProvider.js';
import { Welcome } from '../../components/Welcome/Welcome.js';
import { ProjectsListContainer } from '../../components/projectsList/ProjectsListContainer';
import { PreviewsListContainer } from '../../components/Previews/PreviewsListContainer';
import { ProjectSummary } from '../../components/ProjectSummary/ProjectSummary';
import './Home.css';

export const Home = () => {
  const { currentProyectSelected } = useContext(CurrentProyectSelectedContext);

  return (
    <div className='homeContainer'>
      <Welcome />
      <ProjectsListContainer />
      {currentProyectSelected !== null && (
        <>
          <PreviewsListContainer />
          <ProjectSummary />
        </>
      )}
    </div>
  );
};
