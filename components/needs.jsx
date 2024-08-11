import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import UI from '../images/UI.png';
import Res from '../images/Res.png';
import Maintenance from '../images/Maintenance.png';
import Image from 'next/image';
import Link from "next/link";


const OverviewDropdown = ({ heading, children, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="icon-left">{icon}</span>
        <h3>{heading}</h3>
        <span className={`icon ${isOpen ? 'rotate' : ''}`}>
          <FaChevronDown color='#e8bd4d'/>
        </span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export const Needs = () => {
  return (
    <div id='needs' className='needs-body'>
      <div className='your-needs'>
        <div className='needs'>
          <h2>What can I do for<br /> your Needs</h2>
          <p>As a web developer, I specialize in creating
             responsive and user-friendly websites and projects.
              I ensure that your websites are optimized for
              both desktop and mobile devices, providing an
              exceptional user experience across all platforms.
          </p>
          <div className='completed'>
            <div className="">
              <h4>20+</h4>
              <p>Static Websites</p>
            </div>
            <div className="">
              <h4>5+</h4>
              <p>Woocommerce Sites</p>
            </div>
          </div>
        </div> 

        <div className='drop-downs'>
          <div>
            <OverviewDropdown heading="UI/UX" icon={<Image className='needs-image' src={UI} alt="" />}>
              <p>Crafting visually appealing and intuitive interfaces that enhance user
                 interaction and satisfaction.</p>
            </OverviewDropdown>
            <OverviewDropdown heading="Responsive Design" icon={<Image className='needs-image' src={Res} alt="React Js" />}>
              <p> Ensuring your website adapts seamlessly to different screen sizes and devices, 
                including tablets and smartphones.</p>
            </OverviewDropdown>
            <OverviewDropdown heading="Website Maintenance" icon={<Image  className='needs-image' src={Maintenance} alt="Next Js" />}>
              <p>Making sure site performs efficiently and plugin updates solve the error logs.</p>
            </OverviewDropdown>
          </div>
        </div>
      </div>
    </div>
  )
}
