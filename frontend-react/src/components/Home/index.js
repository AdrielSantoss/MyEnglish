import React from 'react';
import Header from '../Header'
import Header_Container from '../Header_Container'
import Content from '../Content'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'

export default function Home() {
 return (
   <div>
       <Header/>
       <Outlet/>
       <Content/>
       <Footer/>
   </div>
 );
}