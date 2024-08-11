import React from 'react';
import Image from 'next/image';
import vijay from '../images/vijay.png';
import react from '../images/1.png';
import git from '../images/2.png';
import Next from '../images/3.png';
import Linked from '../images/4.png';
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
        <Image className='work-icons' alt='icons' src={react} />
        <Image className='work-icons' alt='icons' src={git} />
        <Image className='work-icons' alt='icons' src={Next} />
        <Image className='work-icons' alt='icons' src={Linked} />
      </div>
    </div>
  );
};
