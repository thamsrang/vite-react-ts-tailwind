import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import('preline');

import App from './App.tsx'
import ErrorPage from './error-page.tsx'
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/app",
    element: <App />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
