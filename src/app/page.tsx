// components/Header.tsx
"use client"
import React from 'react';
import Menu from "../../components/menu";
import {Home} from "../../components/home";
import {Logo} from "../../components/logo";
import {Needs} from "../../components/needs";
import {Columns} from "../../components/columns";
import Form from "../../components/form";
import Sites from "../../components/sites";

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center' >
        <Menu/>
         <Home/>
         <Logo/>
         <Needs/>
         <Columns/>
         <Sites/>
         <Form/>
        </div>
    );
};

export default Header;
