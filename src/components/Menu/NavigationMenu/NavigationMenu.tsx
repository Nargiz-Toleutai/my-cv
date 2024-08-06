import { useLocation, useNavigate } from 'react-router-dom';
import { NavigationLinkProps } from '../NavigationLink/types';
import { useMemo } from 'react';
import block from 'bem-cn-lite';
import { NavigationLink } from '../NavigationLink';
import './NavigationMenu.scss';
import React from 'react';
import { NavigationMenuProps } from './types';

const b = block('navigation-menu');

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  setIsOpen,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // const currentThemeId = useAppSelector((state) => state.theme.themeId);
  // const currentColorId = useAppSelector((state) => state.theme.colorId);

  const links: NavigationLinkProps[] = useMemo(
    () => [
      { id: 'home', title: 'HOME', to: '/home' },
      { id: 'portfolio', title: 'PORTFOLIO', to: '/portfolio' },
      { id: 'contacts', title: 'CONTACTS', to: '/contacts' },
    ],
    [],
  );

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <nav className={b()}>
      <ul>
        {links.map(link => (
          <li key={link.id} onClick={() => handleNavigation(link.to)}>
            <NavigationLink
              {...link}
              selected={link.to === location.pathname}
              title={link.title}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};
