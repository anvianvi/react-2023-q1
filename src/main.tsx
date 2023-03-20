import './style.sass';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/root/root';
import About from './pages/about/about';
import ErrorPage from './pages/error-page/error-page';
import Main from './pages/main-page/main';

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Main /> },
      {
        path: `main`,
        element: <Main />,
        // loader: mainLoader,
        // action: mainAction,
      },
      {
        path: `about`,
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
