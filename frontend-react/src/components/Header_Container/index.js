import React from 'react';
import './header-container.css'
import Header_Content from '../Header_Content'

export default function Header_Container() {
 return (
   <div className="menuContainer-wrapper">
       <div className="menu-container"><Header_Content/></div>
   </div>
 );
}