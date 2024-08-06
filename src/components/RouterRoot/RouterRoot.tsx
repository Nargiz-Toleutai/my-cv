import block from 'bem-cn-lite';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './RouterRoot.scss';
import { NavigationMenu } from '../Menu/NavigationMenu/NavigationMenu';
import { MenuToggle } from '../Menu/MenuToggle/MenuToggle';
import { useMenuAnimation } from '../../utils/useMenuAnimation';

const b = block('router-root');

export const RouterRoot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scope = useMenuAnimation(isOpen);
  return (
    <div ref={scope} className={b()}>
      <Outlet />
      <NavigationMenu setIsOpen={setIsOpen} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  );
};
