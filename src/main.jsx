import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import createrouting from './Components/Routing/Routing'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <RouterProvider router={createrouting}></RouterProvider>
  </React.StrictMode>,
)
