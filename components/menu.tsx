// components/Header.tsx
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { MdEmojiObjects } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";

const Menu = () => {

    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle') as HTMLButtonElement;
        const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;
        const overlay = document.getElementById('overlay') as HTMLDivElement;
        const nav = document.getElementById('nav') as HTMLElement;

        const toggleMenu = () => {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
        };

        menuToggle.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        return () => {
            menuToggle.removeEventListener('click', toggleMenu);
            closeBtn.removeEventListener('click', toggleMenu);
            overlay.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <>
            <header className="menu-body">
                <div className="header">
                    <div className="logo">
                        <Link href="/">
                        <MdEmojiObjects style={{
                          color:'yellow',
                          fontSize:'24px'}} />
                        </Link>
                        <Link  href="/"><h1>Greese</h1></Link>
                        
                    </div>
                    <nav className="nav" id="nav">
                        <button className="close-btn" id="close-btn">×</button>
                        <ul className="menu">
                            <li><Link href="#needs">About</Link></li>
                            <li><Link href="#columns">Skills</Link></li>
                            <li><Link href="#sites">My Works</Link></li>
                            <li><Link href="#contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="profile-view">                       
                            <>
                                <button><Link href="https://www.linkedin.com/in/greese-vijay-73516a218/"><FaLinkedinIn /></Link></button>
                            </>
                    </div>
                    <button className="menu-toggle" id="menu-toggle"><AiOutlineMenuFold /></button>
                    <div className="overlay" id="overlay"></div>
                </div>
            </header>
            <style jsx>{`
             
            `}</style>
        </>
    );
};

export default Menu;