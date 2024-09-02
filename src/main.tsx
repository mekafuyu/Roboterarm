import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from '@emotion/react';

import './index.css'
import theme from './theme';

import SensorPage from './Pages/SensorPage/index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SensorPage/>
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
