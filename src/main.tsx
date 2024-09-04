import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';

import './index.css'
import theme from './theme';

import HomePage from './Pages/HomePage/index.tsx';
import SensorPage from './Pages/SensorPage/index.tsx';

const router = createBrowserRouter([
  { path: "/", element: <SensorPage/> },
  { path: "/home", element: <HomePage/> }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)