'use client'
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import banner from '../images/banner.png';
import Image from 'next/image';
import vijay from '../images/vijay.png';
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { FaWordpress } from "react-icons/fa6";
import { FaShopify  } from "react-icons/fa";

export const Home = () => {
  const words = ["Web Developer","Web App Developer", "Wordpress Developer", "Frontend Developer"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isErasing) {
        if (currentCharIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsErasing(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (currentCharIndex < words[currentWordIndex].length) {
          setDisplayedText((prev) => prev + words[currentWordIndex].charAt(currentCharIndex));
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsErasing(true), 1000);
        }
      }
    };

    const typingSpeed = isErasing ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, isErasing, words, currentWordIndex]);

  return (
    <div  className='home-body'>
      <div className='home'>
        {/* style={{ backgroundImage: `url(${banner.src})`,backgroundPosition: 'center',backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }} */}
        <div id='home' className='home-info'>
          <div>
            <h2>I&apos;m</h2>
            <h1>Greese Gilbert Vijay</h1>
            <hr className='hr mb-2' />
            <h3>{displayedText}<span className='cursor'>|</span></h3>
            <p>I&apos;m an experienced Web Developer specializing in React and WordPress, with about 1.5 years of experience. I build websites and web apps that work well on different devices using tools like React.js, Next.js, WordPress, HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS.</p>
          </div>
          <div className='home-vijay'>
            <div >
              <div className='square'><TiHtml5/></div>
              <div className='square'><IoLogoReact/></div>
              <div className='square'><RiNextjsLine/></div>
              <div className='square'><FaWordpress/></div>
              <div className='square'><FaShopify/></div>
            </div>
            <div className='my-vijay'>
            <Image width={400} height={400}  src={vijay} alt="" />
            </div>
          </div>
        </div>

        <div className='details-info'>
          <h3>Services</h3>
          <h4>Let&apos;s build quality websites and web applications<br />and designs.</h4>
          <Link href="#columns" className='button'>
            View More <FaArrowRightLong className='arrow-icons' />
          </Link>
          <div className='social-icons'>
            <Link href="https://www.facebook.com/profile.php?id=100095339317250&mibextid=ZbWKwL"><FaFacebookF className='my-icons' /></Link>
            <Link href="https://www.instagram.com/greesegilbertvijay/"><FaInstagram className='my-icons' /></Link>
          </div>
        </div>
      </div>
      <style jsx>{`

        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: black; }
        }

        .cursor {
          display: inline-block;
          animation: blink-caret 0.75s step-end infinite;
        }
      `}</style>
    </div>
  );
}
