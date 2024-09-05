import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import SensorPage from './Pages/SensorPage/index.tsx';
import HomePage from './Pages/HomePage/index.tsx';
import LoginRegisterPage from './Pages/LoginRegisterPage/index.tsx';

const router = createBrowserRouter([
  { path: "/", element: <LoginRegisterPage/> },
  { path: "/sensor", element: <SensorPage/> },
  { path: "/home", element: <HomePage/> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)