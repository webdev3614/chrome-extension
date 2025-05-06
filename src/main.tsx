import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "@fontsource/instrument-sans/400.css"
import "@fontsource/instrument-sans/500.css"
import "@fontsource/instrument-sans/600.css"
import "@fontsource/instrument-sans/700.css"
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import { routes } from "./routes";
const router = createHashRouter([
  {
    path:"/",
    element: (
      <App>
        <Outlet/>
      </App>
    ),
    children:routes
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
