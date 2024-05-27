import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientLayout from './layout/ClientLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ClientLayout />,
      children: [
        {
          index: true,
          element: <h1>this is home page</h1>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
