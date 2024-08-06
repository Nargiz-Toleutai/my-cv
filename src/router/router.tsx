import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

import { RouterRoot } from '../components/RouterRoot';
import { Home } from '../pages/Home/Home';
import { Portfolio } from '../pages/Portfolio';
import { Contacts } from '../pages/Contacts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RouterRoot />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '*',
        element: <Navigate to="/home" />,
      },
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
    ],
  },
]);
