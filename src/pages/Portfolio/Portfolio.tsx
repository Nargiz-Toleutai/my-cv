import block from 'bem-cn-lite';
import React, { useState } from 'react';

import './Portfolio.scss';
import Doer from '../../assets/images/projects/Doer.svg';
import HealMe from '../../assets/images/projects/HealMe.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { projectsList } from '../../utils/projectsList';

const b = block('portfolio');

export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  const selectedProject = projectsList.find(
    project => project.id === selectedId,
  );

  const toggleSelection = (id: string) => {
    setSelectedId(selectedId === id ? '' : id);
  };

  return (
    <div className={b()}>
      <div
        className={b('overlay')}
        style={{ display: selectedProject ? 'block' : 'none' }}
      ></div>
      <div className={b('wrapper')}>
        {projectsList.map(project => (
          <motion.div
            className={b('project')}
            key={project.id}
            onClick={() => toggleSelection(project.id)}
          >
            <img
              src={project.img}
              alt={project.name}
              className={b('project')}
            />
            <div className={b('content')}>
              <motion.h2>{project.name}</motion.h2>
              <motion.h5>{project.description}</motion.h5>
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className={b('project', 'selected')}
              layoutId={selectedProject.id}
            >
              <img
                src={selectedProject.img}
                alt={selectedProject.name}
                className={b('project')}
              />
              <div className={b('content')}>
                <motion.h5>{selectedProject.description}</motion.h5>
                <motion.h2>{selectedProject.name}</motion.h2>
              </div>
              <motion.button onClick={() => setSelectedId('')}>
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/*
export const Portfolio: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  const toggleSelection = (id: string) => {
    setSelectedId(selectedId === id ? '' : id);
  };

  return (
    <div className={b('')}>
      <div className={b('wrapper')}>
        <AnimatePresence>
          {projectsList.map(project => (
            <motion.div
              className={
                selectedId === project.id
                  ? `${b('project', 'selected')}`
                  : `${b('project')}`
              }
              key={project.id}
              onClick={() => toggleSelection(project.id)}
            >
              <img src={project.img} alt={project.name} />
              <div>
                <motion.h2>{project.name}</motion.h2>
                <motion.h5>{project.description}</motion.h5>
              </div>
            </motion.div>
          ))}
          {selectedId && (
            <motion.div
              className="portfolio__project-selected selected"
              layoutId={selectedId}
            >
              <img
                src={projectsList.find(p => p.id === selectedId)?.img}
                alt={projectsList.find(p => p.id === selectedId)?.name}
              />
              <div>
                <motion.h5>
                  {projectsList.find(p => p.id === selectedId)?.description}
                </motion.h5>
                <motion.h2>
                  {projectsList.find(p => p.id === selectedId)?.name}
                </motion.h2>
              </div>
              <motion.button onClick={() => setSelectedId('')}>
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
*/
