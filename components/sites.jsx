import React from 'react';
import Image from "next/image";
import cake from '../images/cake-square-logo.png';
import magik from '../images/magikstar.png';
import renovar from '../images/renovar.png';
import simta from '../images/simta.png';
import vendorsgo from '../images/vendorsgo.png';
import onesight from '../images/onesight.png';
import scream from '../images/scream.png';
import taxkey from '../images/taxkey.png';
import treona from '../images/treona.png';
import emerge from '../images/emeregetech.png';
import coach from '../images/coach.png';
import wonchance from '../images/wonchance.png';
import pravda from '../images/pravda.png';
import associates from '../images/associates.png';
import matchframe from '../images/matchframe.png';

const Sites = () => {

  return (
    <div id='sites' className="sites-body">
      <div className="main">
        <h1>Some of My Developed Sites</h1>
        <marquee loop="infinite" direction="left" behavior="scroll">
          <div className='mark'>
            <Image width={200} height={100} className='site-image' src={wonchance} alt="Cake" />
            <Image width={200} height={100} className='site-image' src={cake} alt="Cake" />
            <Image width={200} height={100} className='site-image' src={magik} alt="Magik" />
            <Image width={200} height={100} className='site-image' src={renovar} alt="Renovar" />
            <Image width={200} height={100} className='site-image' src={simta} alt="Simta" />
            <Image width={200} height={100} className='site-image' src={vendorsgo} alt="VendorsGo" />
            <Image width={200} height={100} className='site-image' src={onesight} alt="onesight" />
            <Image width={200} height={100} className='site-image' src={scream} alt="scream" />
            <Image width={200} height={100} className='site-image' src={taxkey} alt="taxkey" />
            <Image width={200} height={100} className='site-image' src={treona} alt="treona" />
            <Image width={200} height={100} className='site-image' src={emerge} alt="emerge" />
            <Image width={200} height={100} className='site-image' src={coach} alt="coach" />
            <Image width={200} height={100} className='site-image' src={matchframe} alt="coach" />
            <Image width={200} height={100} className='site-image' src={associates} alt="coach" />
            <Image width={200} height={100} className='site-image' src={pravda} alt="coach" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default Sites;
