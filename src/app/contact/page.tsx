// components/Header.tsx
"use client"
import Form from "../../../components/form";
import Menu from "../../../components/menu";


const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center' >
         <Menu/>
         <Form/>
        </div>
    );
};

export default Header;
