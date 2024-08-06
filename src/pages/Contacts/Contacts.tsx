import block from 'bem-cn-lite';
import React, { useState } from 'react';

import './Contacts.scss';
import { PersonalInfo } from '../../components/PersonalInfo';

const b = block('contacts');

export const Contacts: React.FC = () => {
  return (
    <div className={b()}>
      <PersonalInfo />
    </div>
  );
};
