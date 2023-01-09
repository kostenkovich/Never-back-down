import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/header-main';
import Footer from './footer/footer-main';

const HeaderFooter = function(){

    
    return(
        <>
        <Header/>

        <Outlet/>

        <Footer/>
        </>
      )
}

export default HeaderFooter;