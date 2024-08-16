import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";


emailjs.init("QzQv1OtT9eLkddKXM");

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        purpose: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.send("service_qm81aws", "template_gtsslvk", formData)
            .then(response => {
                alert("Email Sent!!");
            })
            .catch(error => {
                alert("Failed to send email: " + JSON.stringify(error));
            });
    };

    return (
     <div className="form-body">
       <div className='form-col'>
        <div className='form-email'>
            <div>
              <h1>Email</h1>
              <p>greesevijaygilbert18@gmail.com</p>
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
        <div>
        <form id='contact' onSubmit={sendMail}>
             <h2>Contact Me</h2>
             <div className='form-data'>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
             </div>

             <div className='form-data'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
             </div>

             <div className='form-data'>
              <label htmlFor="number">Phone Number</label>
              <input type="tel" id="number" name="number" value={formData.number} onChange={handleChange} required />
             </div>
             
             <div className='form-data'>
              <label htmlFor="purpose">Purpose</label>
              <textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required />
             </div>
             
             <button type="submit">Send</button>
         </form>
        </div>
       </div>
     </div>
    );
};

export default Form;
