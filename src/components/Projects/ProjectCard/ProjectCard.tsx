import block from 'bem-cn-lite';

import { ProjectCardProps } from './types';
import './ProjectCard.scss';
import React from 'react';

const b = block('project-card');

export const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  projectImg,
}) => {
  return (
    <div className={b()}>
      <img className={b(name)} src={projectImg} alt="project"></img>
    </div>
  );
};
