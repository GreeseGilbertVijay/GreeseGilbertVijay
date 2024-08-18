// components/Header.tsx
"use client"
import React from 'react';
import Menu from "../../components/menu";
import {Home} from "../../components/home";
import {Logo} from "../../components/logo";
import {Needs} from "../../components/needs";
import {Columns} from "../../components/columns";
import Sites from "../../components/sites";
// import {Footer} from "../../components/footer";


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center' >
         <Menu/>
         <Home/>
         <Logo/>
         <Needs/>
         <Columns/>
         <Sites/>
         {/* <Footer/> */}
        </div>
    );
};

export default Header;
