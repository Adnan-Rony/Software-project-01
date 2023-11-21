import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import createrouting from './Components/Routing/Routing'
import AuthProvider from './AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <AuthProvider>
  <RouterProvider router={createrouting}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
