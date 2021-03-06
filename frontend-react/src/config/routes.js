import React from 'react'
import {BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Container from '../components/Header_Container'
import Content from '../components/Header_Content'
import Start from '../components/Start'
import Types from '../components/Types'
import Game from '../components/Game'

export default function MainRoutes(){


    return (
        <Routes>

            <Route path="/" element={<Home/>}>
                <Route path="/" element={<Container/>}>
                    <Route path="/" element={<Content/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/levels" element={<Start/>}/>
                    <Route path="/types" element={<Types/>}/>
                </Route>
            </Route>

           
            <Route path="/game" element={<Game/>} /> 

        </Routes>
    )
};