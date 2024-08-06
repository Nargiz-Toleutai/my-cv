import block from 'bem-cn-lite';
import './ProfessionalBackground.scss';
import { Projects } from '../Projects';
import React from 'react';

const b = block('professional-background');

export const ProfessionalBackground: React.FC = () => {
  return (
    <div className={b()}>
      <Projects />
      <div className={b('text')}>
        <h2>Professional Background</h2>
        <p>
          In the past, I was an Executive Assistant to the CEO of a bank.
          However, I decided to change my profession. I began by taking courses
          and then tried my hand at several startups in Kazakhstan. Eventually,
          I initiated my own ventures: a habit-tracking tool called Doer and a
          platform for psychological support named HealMe.
        </p>
      </div>
    </div>
  );
};
