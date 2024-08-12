import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaWordpress } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { FaShopify  } from "react-icons/fa";


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
            <OverviewDropdown heading="Wordpress" icon={<FaWordpress color='#1f7196' size={28}/>}>
              <p>Have experience in developing websites with WordPress, focusing on creating customizable and feature-rich sites.
                 They have built and maintained a variety of WordPress sites, from simple blogs to complex e-commerce platforms, utilizing plugins and
                  custom themes to enhance functionality.
                 </p>
            </OverviewDropdown>
            <OverviewDropdown heading="Web Applications" icon={<CgWebsite color='red' size={28}/>}>
              <p> Creating scalable, high-performance applications with a focus on user experience and responsiveness. 
                By leveraging modern technologies like Next.js, React.js,
                 and Tailwind CSS and deliver solutions that are both visually appealing and functionally efficient across all devices.</p>
            </OverviewDropdown>
            <OverviewDropdown heading="Shopify" icon={<FaShopify color='#90b943' size={28}/>}>
              <p>Developed and customized Shopify stores, tailoring e-commerce solutions to meet specific business needs. They have implemented unique themes,
                 integrated third-party apps, and optimized online stores for a seamless shopping experience. </p>
            </OverviewDropdown>
          </div>
        </div>
      </div>
    </div>
  )
}
