import React, {useEffect} from 'react';
import Header from '../Header'
import Header_Container from '../Header_Container'
import Content from '../Content'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'

export default function Home() {

  useEffect(()=>{
    if(!localStorage.getItem('theme_MyEnglish')){
      localStorage.setItem('theme_MyEnglish','whiteMode')
   }
  },[])

 return (
   <div>
       <Header/>
       <Outlet/>
       <Content/>
       <Footer/>
   </div>
 );
}