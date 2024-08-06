import block from 'bem-cn-lite';
import { ProjectCard } from './ProjectCard/ProjectCard';
import './Projects.scss';
import React from 'react';
import { projectsList } from '../../utils/projectsList';
const b = block('projects');

export const Projects: React.FC = () => {
  return (
    <div className={b()}>
      {projectsList.map(project => (
        <ProjectCard
          key={project.id}
          name={project.name}
          projectImg={project.img}
          description={project.description}
        />
      ))}
    </div>
  );
};
