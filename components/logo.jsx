import React from 'react';
import Image from 'next/image';
import vijay from '../images/vijay.png';
import wordpress from '../images/wordpresslogo.png';
import shopify from '../images/shopifylogo.png';
import nextjs from '../images/nextjslogo.png';
import github from '../images/gitlogo.png';
import { TiHtml5 } from "react-icons/ti";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa6";
import { FaShopify  } from "react-icons/fa";

export const Logo = () => {
  return (
    <div className='my-images'>
      <div className='circle-container'>
        <div className='circle'><TiHtml5/></div>
        <div className='circle'><IoLogoReact/></div>
        <div className='circle'><RiNextjsLine/></div>
        <div className='circle'><FaWordpress/></div>
        <div className='circle'><FaShopify/></div>
      </div>
      <div className='image'>
        <Image width={400} height={400} className='vijay' src={vijay} alt="image" />
      </div>
      <div className='work-images'>
        <Image className='work-icons' alt='icons' src={wordpress} />
        <Image className='work-icons' alt='icons' src={shopify} />
        <Image className='work-icons' alt='icons' src={nextjs} />
        <Image className='work-icons' alt='icons' src={github} />
      </div>
    </div>
  );
};
