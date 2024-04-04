import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import './index.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Planting from './pages/Batch';
import CreateBatch from './pages/Batch/createBatch';

function Layout() {
  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/planting",
        element: <Planting />,
      },
      {
        path: "/createbatch",
        element: <CreateBatch />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
