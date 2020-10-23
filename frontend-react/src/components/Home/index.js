import React, {useEffect} from 'react';
import Header from '../Header'
import Header_Container from '../Header_Container'
import Content from '../Content'
import Footer from '../Footer'
import {Outlet} from 'react-router-dom'
import { Transition } from 'react-transition-group';


export default function Home({ in: inProp }) {

  useEffect(()=>{
    if(!localStorage.getItem('theme_MyEnglish')){
      localStorage.setItem('theme_MyEnglish','whiteMode')
   }
  },[])

 return (
   <div>
     
       <Header/>
       <Transition in={false} timeout={500}>
         <Outlet/>
       </Transition>
       <Content/>
       <Footer/>
    
   </div>
 );
}