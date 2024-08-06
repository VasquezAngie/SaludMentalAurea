import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/login.tsx'
import Signup from './routes/logout.tsx'
import Dashboard from './routes/dashboard.tsx'
import ProtectedRoute from './routes/protectecRoute.tsx'
import PrincipalPage from './routes/principalPage.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalPage/>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "Dashboard",
        element: <Dashboard />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
