// components/Header.tsx
"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { MdEmojiObjects } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoMdCloudDownload } from "react-icons/io";
import resume from '../images/Greesegilbertvijay.png';

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

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume.src; // Use the Image src as the href
        link.download = 'Greese_gilbert_vijay.png'; // The name of the file after downloading
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <header className="menu-body">
                <div className="header">
                    <div className="logo">
                        <Link href="/">
                            <MdEmojiObjects style={{ color: 'yellow', fontSize: '24px' }} />
                        </Link>
                        <Link href="/"><h1>Greese</h1></Link>
                    </div>
                    <nav className="nav" id="nav">
                        <button className="close-btn" id="close-btn">×</button>
                        <ul className="menu">
                            <li><Link href="#needs">About</Link></li>
                            <li><Link href="#columns">Skills</Link></li>
                            <li><Link href="#sites">My Works</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="profile-view">
                        <button className='resume' onClick={handleDownload}>Download Resume <IoMdCloudDownload /></button>
                        <button><Link href="https://www.linkedin.com/in/greese-vijay-73516a218/"><FaLinkedinIn /></Link></button>
                    </div>
                    <button className='tab-mobile-resume' onClick={handleDownload}><IoMdCloudDownload size={24} /></button>
                    <button className="menu-toggle" id="menu-toggle"><AiOutlineMenuFold /></button>
                    <div className="overlay" id="overlay"></div>
                </div>
            </header>
            <style jsx>{`
                /* Add your styles here */
            `}</style>
        </>
    );
};

export default Menu;
