import React from 'react'
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='footer-body'>
          <div className='footer'>
            <div>
              <h1>Email</h1>
              <Link href="mailto:greesevijaygilbert18@gmail.com" ><p>greesevijaygilbert18@gmail.com</p></Link>  
              <Link href="tel:+919566574232" ><p>+91 95665 74232</p></Link>                          
            </div>
            <div>
              <h1>Social Media</h1>
              <div className='social-media'>
              <Link href="https://www.instagram.com/greesegilbertvijay/"><FaInstagram size={30} className='my-icons' /></Link>
              <Link href="https://www.facebook.com/profile.php?id=100095339317250&mibextid=ZbWKwL"><FaFacebookF size={30} className='my-icons' /></Link>
              <Link href="https://www.linkedin.com/in/greese-vijay-73516a218/"><FaLinkedinIn size={30} className='my-icons' /></Link>
            </div>
            </div>
        </div>
    </div>
  )
}
