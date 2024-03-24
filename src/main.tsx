import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './app.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'
import { Home } from './routes/Home.tsx'
import { NewPost } from './routes/NewPost.tsx'
import { Post } from './routes/Post.tsx'
import { Admin } from './routes/admin.tsx'
import { AttPost } from './routes/attPost.tsx'

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
      },
      {
        path: "/posts/:id",
        element: <Post/>
      },
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/attPost/:id",
        element: <AttPost/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
