import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Rounds from '../pages/rounds/Rounds'

const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path= "/" element={<Login/>}/>
                <Route path= "/app" element={<App/>}/>
                <Route path= "/home" element={<Home/>}/>
                <Route path= "/round" element={<Rounds/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default Router
