import './App.scss';

import block from 'bem-cn-lite';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import React from 'react';
import { NavigationMenu } from './components/Menu/NavigationMenu/NavigationMenu';
import { MenuToggle } from './components/Menu/MenuToggle/MenuToggle';
import { useMenuAnimation } from './utils/useMenuAnimation';

const b = block('app');

function App() {
  return (
    <div className={b()}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
