import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function Body() {

    const appRouter = createBrowserRouter([
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/",
            element: <Login />
        }
        
    ])
  return (
    <div>
        <RouterProvider router={appRouter} />

        
        
      
    </div>
  )
}

export default Body
