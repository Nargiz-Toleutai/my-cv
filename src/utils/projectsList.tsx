import { useMemo } from 'react';
import DoerProject from '../assets/images/projects/Doer.svg';
import HealMe from '../assets/images/projects/HealMe.svg';

export interface ProjectsListProps {
  id: string;
  name: string;
  description: string;
  img: string;
}

export const projectsList: ProjectsListProps[] = [
  {
    id: 'doer',
    name: 'Doer',
    description: 'habit tracker',
    img: DoerProject,
  },
  {
    id: 'healMe',
    name: 'HealMe',
    description: 'emotional support',
    img: HealMe,
  },
];
