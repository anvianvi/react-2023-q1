import './style.sass';

import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from './pages/root/root';
import About from './pages/about/about';
import ErrorPage from './pages/error-page/error-page';
import Main from './pages/main-page/main-page';
import PersonForm from './pages/person-form/person-form';
import ApiPage from './pages/api-page/api-page';

const router = createHashRouter([
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
        path: `apipage`,
        element: <ApiPage />,
      },
      {
        path: `about`,
        element: <About />,
      },
      {
        path: `subscribe`,
        element: <PersonForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />);
