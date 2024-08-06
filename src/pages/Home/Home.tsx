import block from 'bem-cn-lite';
import React, { useState } from 'react';

import './Home.scss';
import { PersonalInfo } from '../../components/PersonalInfo';

import { ProfessionalBackground } from '../../components/ProfessionalBackground';

const b = block('home');

export const Home: React.FC = () => {
  return (
    <div className={b()}>
      <PersonalInfo />
      <ProfessionalBackground />
    </div>
  );
};
