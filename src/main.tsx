import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

import './index.css'
import { Home } from './routes/Home.tsx'
import { NewPost } from './routes/NewPost.tsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/new",
        element: <NewPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
