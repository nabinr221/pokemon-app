import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientLayout from './layout/ClientLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home/HomePage'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
