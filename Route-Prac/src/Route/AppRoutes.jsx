

import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home'
import App from '../App'
import Contact from '../Pages/Contact'
import About from '../Pages/About'

export let router=createBrowserRouter([
    {
        path:'/',
        element:<App/>

    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'contact',
        element:<Contact/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

const AppRoutes = () => {
}

export default AppRoutes

