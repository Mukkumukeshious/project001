import React from 'react'
import { Routes, Route, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import About from '../Pages/About'
import Project from '../Pages/Project'
import Contact from '../Pages/Contact'

const AppRouter = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          index: true,
          element:<About/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/project',
          element:<Project/>
        },
        {
          path:'/Contact',
          element:<Contact/>
        }
      ]


    }

  ])
 
export default AppRouter
