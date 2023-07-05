import React from 'react'
import {Route,Routes} from "react-router-dom"
import AboutUsPage from '../pages/AboutUsPage'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route>
        <Route path="/"element={<HomePage/>}/>
        <Route path ="/about" element={<AboutUsPage/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default MainRoutes