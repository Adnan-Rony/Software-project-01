import React from 'react';
import Navber from '../Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <Navber></Navber>
            <section className='bg-black'>
            <Outlet></Outlet>
            </section>

            <Footer></Footer>
            
            
        </div>
    );
};

export default MainLayout;