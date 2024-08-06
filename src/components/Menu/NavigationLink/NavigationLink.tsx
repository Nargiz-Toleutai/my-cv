import block from 'bem-cn-lite';
import * as React from 'react';
import { Link } from 'react-router-dom';

import { NavigationLinkProps } from './types';

import './NavigationLink.scss';
const b = block('navigation-link');

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  title,
  to,
  selected,
}) => {
  return (
    <Link to={to} className={b({ selected })}>
      {title}
    </Link>
  );
};

// <Icon name={icon} size={0} className={b("icon")} />
// import { Icon } from "../Icon";
