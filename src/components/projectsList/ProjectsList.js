import { projectsData } from '../../JSONs/JSONprojects';
import { ProjectItem } from './ProjectItem';
import './ProjectsList.css';

export const ProjectsList = () => {
  console.log(projectsData);
  return (
    <div className='projectList'>
      {projectsData.map((project, index) => {
        return (
          <ProjectItem key={index} name={project.name} project={project} />
        );
      })}
    </div>
  );
};
