import block from 'bem-cn-lite';
import React from 'react';
import './Introduction.scss';
import { SocialMediaIconsWrapper } from '../../SocialMediaIconsWrapper';
import { Button } from '../../../buttons/Button';
const b = block('info');

export const Introduction: React.FC = () => {
  return (
    <div className={b()}>
      <h1>Nargiz Toleutai</h1>
      <div className={b('role')}>IT enthusiast</div>
      <div className={b('availability-block')}>
        <div className={b('availability-indicator')}></div>
        <div className={b('availability-text')}>Available for work</div>
      </div>
      <SocialMediaIconsWrapper />
      <p className={b('introduction')}>
        Hello, I'm Nargiz, an aspiring Frontend/Full-Stack Developer with
        knowledge in JavaScript, TypeScript, React, and Redux. I am passionate
        about coding interactive and user-friendly web applications and I am
        ready to embrace the challenges ahead. With a commitment to learning and
        continuous improvement, I am excited to contribute fresh perspectives
        and evolve alongside a dynamic team.
      </p>
      <div className={b('buttons')}>
        <Button text="Get in touch" className="big" />
        <Button text="Work" className="small" />
      </div>
    </div>
  );
};
