import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className=''>
           <Nav></Nav>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;